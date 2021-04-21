
import Stack from './stack';
import { addClass, removeClass } from './index';
window.routerStack = new Stack();
class Router {
  constructor() {
    this.root = document.getElementById('root');
    this.currentNode = null;
    this.push()
  }
  push() {
    this.setCurrentNode();
    window.routerStack.push(this.currentNode);
    if (window.routerStack.getLen() > 1) {
      // 栈顶元素展示
      addClass(window.routerStack.peek(), 'slider-right-enter');
      removeClass(window.routerStack.peek(), 'slider-left-leave');
      // 上一个页面隐藏
      addClass(window.routerStack.getLastChild(), 'slider-left-leave');
      removeClass(window.routerStack.getLastChild(), 'slider-right-enter');
    }
  }
  // 出栈
  goBack() {
    const curTopNode = window.routerStack.peek();
    // 原栈顶元素隐藏
    removeClass(curTopNode, 'slider-right-enter');
    removeClass(curTopNode, 'slider-left-enter');
    addClass(curTopNode, 'slider-right-leave');
    // 栈定元素弹出
    window.routerStack.pop();
    // 新栈顶元素激活展示
    removeClass(window.routerStack.peek(), 'slider-left-leave');
    removeClass(window.routerStack.peek(), 'slider-right-leave');
    addClass(window.routerStack.peek(), 'slider-left-enter');
    curTopNode.addEventListener('animationend', () => {
      this.root.removeChild(curTopNode);
    });
  }
  setCurrentNode() {
    const rootChildNodes = this.root.childNodes;
    const currentNode = rootChildNodes.length && rootChildNodes[rootChildNodes.length - 1];
    this.currentNode = currentNode;
  }
}
export default Router
/**
 * router
 * reactRouter match  rules
 * children> component> render
 * 
```
// children 方式
<Route exact path="/">
   <HomePage />    = >1.是否是函数？执行函数：直接渲染元素
</Route>

// component 方式
<Route path="/user/:username" component={User} />
component 是否存在 ？ 使用createComponent [不再更新现有组件，而是直接卸载再去挂载一个新的组件] : render  ?  render  :  null

// func 方式
<Route
   path="/blog/:slug"
   render={({ match }) => {
     // Do whatever you want with the match...
     return <div />;    =>
   }}
/>
```
 */
 // 严谨的重要性