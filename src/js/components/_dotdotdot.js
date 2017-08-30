import dotdotdot from "dotdotdot";
import { DOC, WIN, BODY } from "../_global";

  class Dotdotdot {
    constructor(config) {
      this._item = config.text;
      this._options = config.options;
      this._height = config.height;
      this._isInit = false;
      this._open = $('<button/>', 
                    { 
                        class: 'more-link btn btn_block js-btn-open', 
                        text: 'показать еще'
                    });

      this._active = "is-open";

      this._firstInit();
      this._toggleClick();

    }

    _firstInit() {
      if ( this._item.outerHeight(true) > this._height ) {
        this.addToggleBtn() 
      };

        this._item.dotdotdot(this._options);
        this._isDot = true;
    }

    _toggleClick() {
      let that = this;

      this._item.on('click', '.js-btn-open' , function(e) {
        e.preventDefault();

        if ( that._isDot && !(that._item.hasClass(that._active)) ) {
          that.open();
          that._open.text("скрыть");
          // console.log(that._open.text("frfr"))
          return;
        }  

        that._open.text("показать еще");
        that.close();
      });
    };

    addToggleBtn() {
      if( !(this._item.hasClass('js-truncate-blocks')) ) {
        this._item.append(this._open).end();
      }
    }

    open() {
      $(this._item).addClass(this._active);
      this._item.trigger("destroy");
      this._isDot = false;
      this._isDot = false;
    }

    close() {
      $(this._item).removeClass(this._active);
      this._item.dotdotdot(this._options);
      this._isDot = true;
    }
  } 

DOC.ready(function() {

  // if ( $('.js-truncate-title').length ) {

  //     $('.js-truncate-title').each(function() {
  //       var _height = $(this).data('height');

  //       new Dotdotdot({
  //         text: $(this),
  //         height: _height,
  //         options: {
  //           ellipsis: '...',  
  //           wrap: 'letter', 
  //           watch: true, 
  //           height: _height
  //           }
  //         });
  //       });
  //   };  

    if ( WIN.width() < 768 ) {
      if ( $('.js-truncate-article').length ) {

        $('.js-truncate-article').each(function() {
          var _height = $(this).data('height');

          new Dotdotdot({
            text: $(this),
            height: _height,
            options: {
              ellipsis: '...',  
              wrap: 'word', 
              after: "button.js-btn-open", 
              watch: true, 
              height: _height
            }
          });
        });
      };
    };
});

