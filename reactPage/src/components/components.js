// import  {getObjectProperty} from '@/utils/index'
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify(key) {
    this.subs.forEach(function (sub) {
      sub.update(key);
    });
  }
}

class Observer {
  constructor(state) {
    this.state = state;
    this.walk(state);
  }
  walk(state) {
    Object.keys(state).forEach((key) => {
      this.defineReactive(state, key, state[key]);
    });
  }
  defineReactive(state, key, val) {
    const dep = new Dep();
    Object.defineProperty(state, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return val;
      },
      set: function (newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        dep.notify(key);
      }
    });
  }
}
class Watcher {
  constructor(vm) {
    this.vm = vm
    this.get();
    this.changeKey = ''
  }
  update(key) {
    this.changeKey = key
    this.run()
  }
  run() {
    // 直接进行数据更新操作
    this.vm.stateEle.innerHTML = this.vm.state[this.changeKey]
  }
  get() {
    // 访问data，触发 get 执行，把当前的 Watcher 实例，添加到 Dep 中
    Dep.target = this;
    Object.keys(this.vm.state).forEach(item=>{
      console.log(this.vm.state[item])
    })
    // 添加成功之后，释放掉自身，其他的实例还需要该引用
    Dep.target = null;
  }
}
class Component {
  constructor(parentNode) {
    // 可以判断parentNode 是否是node节点，如果是直接赋值，如果不是document.querySelector(parentNode)
    this.state = {}
     console.log('parentNode', typeof parentNode)
    if(typeof parentNode === 'string'){
      this.parentNode =   document.getElementById(parentNode || "root")
    }else{
      this.parentNode = parentNode  
    }
  }
  init(){
    this.componentWillMount && this.componentWillMount()
    this.compile()
    this.componentDidMount && this.componentDidMount()
    this.renderDom &&  (setTimeout(() => {
      this.renderDom()
    }, 10))
  }
  
  compile(type) {
    const renderDom = this.render()
    if(type !== 'update'){
      console.log(this.parentNode)
      this.parentNode && this.parentNode.insertAdjacentHTML('beforeend', renderDom)
    }
  }
  update() {
    this.componentWillUpdate && this.componentWillUpdate()
    if(this.shouldComponentUpdate && !this.shouldComponentUpdate()) return
    // 直接修改parent的InnerHTML
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
    /*监听和订阅 */
    new Observer(this.state)
    new Watcher(this)

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
