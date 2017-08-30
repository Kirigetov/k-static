import {DOC, OPEN} from '../_global';

const searchBtn = '.js-search-btn';
const closeBtn = '.js-close-btn';


DOC.on('click', searchBtn, function() {
    const main   = $(this).closest('.js-search-container');
    const input  = main.find('.js-search-input');
    main.addClass(OPEN);

});

DOC.on('click', closeBtn, function(e) {
	e.preventDefault();
	
    const main   = $(this).closest('.js-search-container');
    const input   = main.find('.js-search-input');
    input.val('');
    main.removeClass(OPEN);
});
