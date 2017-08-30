import {ACTIVE, BODY, getWidthLG, WIN} from '../_global';

export default class Popup {
    
    constructor(options) {
        
        this._opt = options || {};
        this._popup = this._opt.popup || $('.js-popup');
        this._inner = $('.js-popup-inner');
        this._btn =  this._opt.btn || $('.js-popup-open');
        this._close = $('.js-popup-close');
        
        this._bodyFixedOnDesktop = this._opt.bodyFixedOnDesktop || false;
        
        this._toggleOnClick();
        this._closeOnResize();
    }
    
    _closeOnResize() {
        WIN.on('resize', () => {
            
            if (!getWidthLG() && this._popup.hasClass(ACTIVE)) {
                this.close();
            }
        });
    }
    
    _toggleOnClick() {
        let that = this;
        


        this._btn.click(function(e) {
            e.preventDefault();
            let id = $(this).data('target');
            that.open(id);
        });
        
        this._close.click(function(e) {
            e.preventDefault();
            that.close();
        });
        
        this._popup.click(function(e) {
            if ($(e.target).closest('.js-popup-inner').length) return;
            that.close();
        });
    }
    
    open(id) {

        if (!!this._onOpen) this._onOpen();
        
        if (this._bodyFixedOnDesktop || getWidthLG()) {
            this._scrollTop = WIN.scrollTop();
            BODY
            .css('top', -this._scrollTop)
            .addClass('popup-open');
            
        }
        
        this._popup
        .filter(`[data-modal="${id}"]`)
        .addClass(ACTIVE);
        
    }
    
    close() {
        if (!!this._onClose) this._onClose();
        BODY
        .removeAttr('style')
        .removeClass('popup-open')
        .scrollTop(this._scrollTop);
        this._popup.removeClass(ACTIVE);
    }
    
    onOpen(callback) {
        this._onOpen = callback;
    }
    
    onClose(callback) {
        this._onClose = callback;
    }
    
}
