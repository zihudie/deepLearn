/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable class-methods-use-this */
// import PageStack from './stack';
import { addClass, removeClass } from './index';
import Tab from './tab';

class Page {
  constructor() {
    // window.pageStack = new PageStack();
    this.root = document.getElementById('app');
    this.currentNode = null;
  }
  // 页面渲染
  render() {
    return '';
  }

  // 页面入栈

  pushPage(type) {
    const domNode = this.render();
    const rootChildNodes = this.root.childNodes;
    // 初始化时 以及tab 切换时直接显示当前 栈中只有一个元素
    if (rootChildNodes.length < 1 || type === 'switch') {
      this.root.innerHTML = domNode;
      this.setCurrentNode();
      window.pageStack.clear();
      window.pageStack.push(this.currentNode);
      //  foot 重新绑定事件
      const tab = new Tab();
      tab.init();
    } else {
      this.root.insertAdjacentHTML('beforeend', domNode);
      this.setCurrentNode();
      window.pageStack.push(this.currentNode);
      // 栈顶元素展示
      addClass(window.pageStack.peek(), 'slider-right-enter');
      removeClass(window.pageStack.peek(), 'slider-left-leave');

      // 上一个页面隐藏
      addClass(window.pageStack.getLastChild(), 'slider-left-leave');
      removeClass(window.pageStack.getLastChild(), 'slider-right-enter');
    }

    this.bindEvent(domNode);
  }
  // 出栈
  removePage() {
    const curTopNode = window.pageStack.peek();
    // 原栈顶元素隐藏
    removeClass(curTopNode, 'slider-right-enter');
    removeClass(curTopNode, 'slider-left-enter');
    addClass(curTopNode, 'slider-right-leave');
    // 弹出栈
    window.pageStack.pop();
    // 新栈顶元素展示
    removeClass(window.pageStack.peek(), 'slider-left-leave');
    removeClass(window.pageStack.peek(), 'slider-right-leave');
    addClass(window.pageStack.peek(), 'slider-left-enter');
    curTopNode.addEventListener('animationend', () => {
      this.root.removeChild(curTopNode);
    });
  }
  setCurrentNode() {
    const rootChildNodes = this.root.childNodes;
    const currentNode = rootChildNodes.length && rootChildNodes[rootChildNodes.length - 1];
    this.currentNode = currentNode;
  }
  // 绑定事件
  bindEvent(nodeStr) {
    // 解析dom上绑定的事件
    const _that = this;
    const reg = /@click=("|')\{\{.+\}\}("|')/g;
    const methods = nodeStr.match(reg);
    methods && methods.forEach((item) => {
      item.replace(/.+\{\{(\w+).+\'([\w\_\-]+)\'.+/g, (...args) => {
        (document.querySelector(`.${args[2]}`)) && (document.querySelector(`.${args[2]}`)).addEventListener('click', () => _that[args[1]]());
        return '';
      });
    });
  }
}

export default Page;
