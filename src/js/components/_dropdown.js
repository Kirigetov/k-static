import { ACTIVE, DOC, OPEN} from "../_global";

  class Dropdown {
    constructor(config) {
      
      this._opt = config;
      this._container = $(config.container);
      this._dropdown = '.js-dropdown';

      this.init();
    }
    init() {
      this._open();
      this._showDropdown();
    }

    _open() {
      let that = this;
      
        DOC.on('click touchstart', this._opt.item, function(e) {
          
          const target = $(e.currentTarget);
          const parent = target.parents(this._opt.container);
          const mobInput = $('.js-dropInput');
          const links = parent.find(this._opt.item);

          links.removeClass(ACTIVE);
          target.addClass(ACTIVE);

          let dropdown = parent.find(this._dropdown);
          let text = target.text();
          let input = parent.find(`${this._opt.input}`);
          input.text(text);
          dropdown.removeClass(OPEN);

          e.preventDefault();
          
      }.bind(this));
      
    }
    _showDropdown() {
         DOC.on('click', this._opt.input  , function(e) {

          const target = $(e.currentTarget);
          const parent = target.parents(this._opt.container);
          const dropdown = parent.find(this._dropdown);

          dropdown.toggleClass(OPEN);

      }.bind(this));
    }
}
  
  export default Dropdown;

  let dropdown = $(".js-dropBlock");
  dropdown.each(function(i, item) {

    new Dropdown({
      container: ".js-dropBlock",
      item: ".js-dropdown-item",
      input: ".js-dropInput"
    });
  });