// import  {getObjectProperty} from '@/utils/index'
 
class Component {
  
  constructor(parentNode) {
    console.log(parentNode)
  
    // 可以判断parentNode 是否是node节点，如果是直接赋值，如果不是document.querySelector(parentNode)
    this.state = {}
    this.parentNode = parentNode ||(document.getElementById("root"))
    this.componentWillMount && this.componentWillMount()
    this.compile()
    this.componentDidMount && this.componentDidMount()
  }
  compile(type) {
    const renderDom = this.render()
    if(type !== 'update'){
      this.parentNode.insertAdjacentHTML('beforeend', renderDom)
    }
  }
  update() {
    this.componentWillUpdate && this.componentWillUpdate()
    if(this.shouldComponentUpdate && !this.shouldComponentUpdate()) return
    this.compile('update')
    this.componentDidUpdate && this.componentDidUpdate()
  }
  modifyState(preState, stateChange) {
    // for (let p in preState) {
    //   if (newState[p] !== undefined) {
    //     if (preState[p] === undefined || getObjectProperty(preState[p]) !== '[object Object]') {
    //       preState[p] = newState[p]
    //     } else {
    //       this.modifyState(preState[p], newState[p])
    //     }
    //   }
    // }
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
  // setState(stateChange,cb){
  //   // this.prevState  = this.state
  //   if(!this.state){
  //      this.state  = object.assign()
  //   }
  // }
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
