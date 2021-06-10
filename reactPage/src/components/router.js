
import Stack from '../utils/stack';
import { addClass, removeClass } from '../utils/index';
const routerStack = new Stack();

// 通过路由api和  path  关联到组件
class Router {
  constructor() {
    this.root = document.getElementById('root');
    this.currentNode = null;
    this.router  = {}
  }
  // 路由注册
  add(path,callBack) {
    this.router[path] = callBack
  }
  init(path){
    this.pushState(path)
    this.listen()
  }
  // 入栈
  push() {
    this.setCurrentNode();
    routerStack.push(this.currentNode);
     // 栈顶元素展示
    addClass(routerStack.peek(), 'slider-right-enter');
    if (routerStack.getLen() > 1) {
      removeClass(routerStack.peek(), 'slider-left-leave');
      // 上一个页面隐藏
      addClass(routerStack.getLastChild(), 'slider-left-leave');
      removeClass(routerStack.getLastChild(), 'slider-right-enter');
      return 
    }
  }
  // 出栈
  goBack() {

    if(routerStack.getLen()<=1) return
    // console.log(this.router)
    const curTopNode = routerStack.peek();
    // 原栈顶元素隐藏
    removeClass(curTopNode, 'slider-right-enter');
    removeClass(curTopNode, 'slider-left-enter');
    addClass(curTopNode, 'slider-right-leave');
    // 栈定元素弹出
    routerStack.pop();
    // 新栈顶元素激活展示
    removeClass(routerStack.peek(), 'slider-left-leave');
    removeClass(routerStack.peek(), 'slider-right-leave');
    addClass(routerStack.peek(), 'slider-left-enter');
    const  peekDom   = routerStack.peek()
    
    this.root.removeChild(curTopNode)
    this.root.appendChild(peekDom)
    // curTopNode.addEventListener('animationend', () => {
    //   // this.root.removeChild(curTopNode);
    //   console.log(routerStack.peek())
    //   // this.root.innerHTML  = ''
    //   this.root.appendChild(routerStack.peek())
    // });
    window.history.go(-1)
  }
  // 当前栈顶元素的node节点
  setCurrentNode() {
    const rootChildNodes = this.root.childNodes;
    const currentNode = rootChildNodes.length && rootChildNodes[rootChildNodes.length - 1];
    this.currentNode = currentNode;
  }
  // 监听路由
  listen() {
    // 默认mainPage入栈
    this.ALinkchangeView()
    // 路由监听
    window.onpopstate = () => {
      const path =  window.location.pathname
      console.log('......路由发生改变',path,routerStack)
      if(!path) return
      // 如果是返回 需要pop ,只有前进的时候才入栈
      // 如何将页面栈和路由栈更好的结合？？？？
      // this.pushState(path)
    }
  }
  ALinkchangeView() {
    document.addEventListener('click', (e) => {
      if (e.target.nodeName === 'A') {
        e.preventDefault()
        let path = e.target.getAttribute('href')
        if(path){
          this.pushState(path)
        }
      }
    })
  }
  pushState(path='/', data = {}) {
    this.push(this.router[path]())
    window.history.pushState(data, '', path)
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