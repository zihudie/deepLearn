// import  {getObjectProperty} from '@/utils/index'
 
class Component {
  constructor(parentNode='root') {
    // 可以判断parentNode 是否是node节点，如果是直接赋值，如果不是document.querySelector(parentNode)
    this.state = {}
    if(typeof parentNode === 'string'){
      this.parentNode =   document.getElementById(parentNode)
    }else{
      this.parentNode = parentNode  
    }
  }
  init(isRender){
    this.componentWillMount && this.componentWillMount()
    this.compile(isRender)
    // this.componentDidMount && this.componentDidMount()
  }
  
  compile(isRender) {
    const renderDom = this.render()
    if(isRender){
      console.log(renderDom)
      return  renderDom
    }
    this.parentNode.innerHTML  = renderDom
  }
  update() {
    this.componentWillUpdate && this.componentWillUpdate()
    if(this.shouldComponentUpdate && !this.shouldComponentUpdate()) return
    this.compile('update')
    this.componentDidUpdate && this.componentDidUpdate()
  }
  modifyState(preState, stateChange) {
    if(typeof stateChange === 'function'){
      Object.assign( this.state, stateChange(preState) );
    }else{
      Object.assign( this.state, stateChange);
    }
  }
  setState(stateChange,cb) {
    if (!this.state) {
      this.state = stateChange
      this.update()
      cb&&cb()
      return
    }
    this.modifyState(this.state, stateChange)
    this.update()
    cb&&cb()
  }
}
export default Component
/**
 * 优先级队列
 * diff  react 链表
 * diff  vue  比react的高
 * 链表  react
 * 双端查询 firstIndex  lastIndex vue 
 * 虚拟dom，怎么做的比较
 * ### 问题
 * 路由
 * 组件的组合
 * 学习jsx 实现方法
 * 
 * 
 * react：
 * 对比不同类型元素: 重新装载新组件
 * 对比同一类型的元素 ：React 会保留 DOM 节点，仅对比更新有改变的属性，
 * 不同层节 子节点
 * ********************
 * 组件卸载如何执行的
 * setState 的异步执行 
 * 
 */
