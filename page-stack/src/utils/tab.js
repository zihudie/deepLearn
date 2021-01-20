

import { addClass, removeClass } from './index';

class Tab {
  constructor() {
    this.curIndex = window.tabIndex;
    this.footerObj = null;
    this.tabs = null;
    this.globalPage = { ...window.tabPages };
  }
  init() {
    this.footerObj = document.getElementById('footer');
    this.tabs = this.footerObj.getElementsByTagName('li');
    // 初始化第一个页面
    addClass(this.tabs[this.curIndex], 'active');
    this.footerObj.addEventListener('click', this.tabChange.bind(this), false);
  }
  tabChange(ev) {
    let target = ev.target;
    if (target && target.nodeName.toLowerCase() === 'span') {
      target = target.parentNode;
    }
    const dataIndex = target.dataset.index;
    // const dataPage = target.dataset.page;
    if (this.curIndex === dataIndex) {
      return;
    }
    removeClass(this.tabs[this.curIndex], 'active');
    addClass(target, 'active');
    this.curIndex = dataIndex;
    window.tabIndex = dataIndex;
    this.pageChange(dataIndex);
  }
  pageChange(dataIndex = 0) {
    // push page into pageStack
    this.globalPage[dataIndex].pushPage('switch');
  }
}

export default Tab;
