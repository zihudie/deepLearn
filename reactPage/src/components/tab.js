

import { addClass, removeClass } from '../utils/index';

class Tab {
  constructor(curIndex = 0) {
    this.curIndex = curIndex;
    this.footerObj = null;
    this.tabs = null;
    this.pages  = document.getElementById("main").getElementsByClassName("page")
  }
  init() {
    this.footerObj = document.getElementById('footer');
    this.tabs = this.footerObj.getElementsByTagName('li');
    // 初始化第this.curIndex个页面
    addClass(this.tabs[this.curIndex], 'active');
    addClass(this.pages[this.curIndex], 'block');
    this.footerObj.addEventListener('click', this.tabChange.bind(this), false);
  }
  tabChange(ev) {
    let target = ev.target;
    if (target && target.nodeName.toLowerCase() === 'span') {
      target = target.parentNode;
    }
    const dataIndex = target.dataset.index;
    if (this.curIndex === dataIndex) {
      return;
    }
    // tab 导航切换
    removeClass(this.tabs[this.curIndex], 'active');
    addClass(target, 'active');
    // 页面展示
    removeClass(this.pages[this.curIndex], 'block');
    addClass(this.pages[dataIndex], 'block');
    // 修改当前的curIndex为最新值
    this.curIndex = dataIndex;
  }
 
}

export default Tab;
