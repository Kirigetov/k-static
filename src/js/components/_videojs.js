import { DOC, WIN, BODY } from "../_global";
import videojs from "video.js";



DOC.ready(function() {

  let players = $(".js-players");

  players.each(function(i, el) {

    if(BODY.hasClass('no-touch')){

        const video = $(this).find('.video-js');
        const player = videojs(video[0]);
        const btn = $(this).find('.vjs-big-play-button');
        var overlay = $(this).find('.videojs-hero-overlay');
        var mainPlayer = $(this).closest('.js-player-main');
        var previewPlayer = $(this).not( mainPlayer );

        player.on(['play', 'playing'], function () {
            overlay.addClass('is-transparent');
            mainPlayer.addClass('is-transparent');
        });
        player.on(['pause'], function () {
            overlay.removeClass('is-transparent');
          //  mainPlayer.removeClass('is-transparent');
        });

      previewPlayer.hover(function(){

        player.play();

      }, function(){
        player.pause();
      })
    } else {

        const video = $(this).find('.video-js');
        const player = videojs(video[0]);
        const btn = $(this).find('.vjs-big-play-button');
        var overlay = $(this).find('.videojs-hero-overlay');
        var mainPlayer = $(this).closest('.js-player-main');
        var previewPlayer = $(this).not( mainPlayer );



        player.on(['play', 'playing'], function () {
            overlay.addClass('is-transparent');
            mainPlayer.addClass('is-transparent');

        });
        player.on(['pause'], function () {
            overlay.removeClass('is-transparent');
           // mainPlayer.removeClass('is-transparent');
        });


      if ($(this).hasClass('js-player-main')) {
        let tech = $(this).find('.vjs-tech');
        let overlay = $(this).find('.videojs-hero-overlay');

        console.log(tech);


        tech.on('touchstart click', function(e) {
          e.stopPropagation();
        
          if (video.hasClass('vjs-playing')) {
            player.pause();
            
          } else {
            player.play();
          }
          
        });
      } else {
         $(video).hide();
         console.log('app display none');
      }
    }


  });

});