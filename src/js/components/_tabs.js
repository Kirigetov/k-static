import { ACTIVE, DOC, OPEN} from "../_global";

  class Tabs {
    constructor(config) {
      
      this._opt = config;
      this._container = $(config.container);
      this._items = $(config.container).find(config.item);
      this._content = $(config.container).find(config.content);
     
      this.init();
    }
    init() {
      this._open();
    }
    _open() {
      let that = this;
      
        DOC.on('click touchstart', this._opt.item, function(e) {
          

          const target = $(e.currentTarget);
          const id = target.index();
          const parent = target.parents(this._opt.container);
          const links = parent.find(this._opt.item);
          const content = parent.find(`${this._opt.content}:not(:nth-child(${id+1}))`);
          const toShow = parent.find(this._opt.content).eq(id);

          links.removeClass(ACTIVE);
          target.addClass(ACTIVE);
          
          content.removeClass(ACTIVE);
          toShow.addClass(ACTIVE);
         
          e.preventDefault();
          
      }.bind(this));
      
    }
  }
  
  export default Tabs;

  let tabs = $(".js-tabs");
  tabs.each(function(i, item) {

    new Tabs({
      container: ".js-tabs",
      item: ".js-tabs-item",
      content: ".js-tabs-content"
    });
  });
