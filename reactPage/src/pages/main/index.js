import Components from '@/components/components'
import Tab from '@/components/tab'
import footer from "./footer"
import chats from './chats'
import contacts from './contacts'
import discover from './discover'
import me from './me'
const mainPageDom = `<div class="main" id="main">
   ${chats}
   ${contacts}
   ${discover}
   ${me}
   ${footer}</div>`
class MainPage extends Components {
  constructor(parentNode) {
    super(parentNode)
    this.state = {
      pageName: 'index',
      teacher: 'mentor',
      classes:['js','react','vue']
    }
    this.stateEle = document.getElementById("stateDom")
    // (state,key)
  }
  render() {
    console.log("main page")
    // this.state  = {}  ?
    // console.log("this.state",this,this.state)
    return mainPageDom
  }
 
  componentDidMount() {
    // tab 绑定事件 默认第*个TAB 展示
    const tab = new Tab(0);
    tab.init();
    /**
     * 模拟修改state
     */
    document.getElementById('stateDom').addEventListener("click",this.changeMyState.bind(this))
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


