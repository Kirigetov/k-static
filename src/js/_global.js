export const {
    // export like variables
    DOC,
    WIN,
    HTML,
    BODY,
    ACTIVE,
    SHOW,
    OPEN,

    getWidthLG,
    
    widthLG,

    touch
} = {
    //variables and values
    DOC     : $(document),
    WIN     : $(window),
    HTML    : $('html'),
    BODY    : $('body'),
    ACTIVE  : 'is-active',
    SHOW    : 'is-show',
    OPEN    : 'is-open',

    widthLG: 1200,

    //detect functions
    touch() {
        return 'ontouchstart' in window;
    },
    getWidthLG() {
        return window.matchMedia(`(max-width: ${widthLG}px)`).matches;
    }
};

// detect 
if (!touch()) {
    BODY.addClass('no-touch');
}
