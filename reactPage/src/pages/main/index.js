import Components from '@/components/components'
import Tab from '@/components/tab'
import footer from "./footer"
import chats from './chats'
import contacts from './contacts'
import discover from './discover'
import me from './me'
 
class MainPage extends Components {
  constructor(parentNode) {
    super(parentNode)
    this.state = {
      pageName: 'index',
      teacher: 'mentor',
      classes:['js','react','vue']
    }
    this.stateEle = document.getElementById("stateDom")
  }
  render() {
    console.log("main page")
    // this.state  = {}  ?
    // console.log("this.state",this,this.state)
    /**
     *  // <div class="page page2" id="page2" >
      // ${new contacts("#page2").init()}
      // </div> 
     */
    return (
      `<div class="main" id="main">
       <div class="page page1" id="page1">
      </div>
      <div class="page page2" id="page2">
      </div>
      ${discover}
      ${me}
      ${footer}</div>`
    )
  }
  componentDidMount() {
    // 插入对应的页面
    new chats("page1").init()
    new contacts("page2").init()
    // tab 绑定事件 默认第*个TAB 展示
    const tab = new Tab(0);
    tab.init();
  }
  changeMyState(){
    // - 对象格式
    // this.setState({
    //   classes:'all stack'
    // },()=>{
    //   console.log('state',this.state)
    // })
    // - 函数格式
    console.log("change")
    this.setState((prevState)=>{
      return {
        classes:`I need to study all, ${prevState.classes}`
      }
    } )
  }
}
export default MainPage;


