import Components from '@/components/components'
class chats extends Components {
  constructor(parentNode) {
    super(parentNode)
    this.data =  [
      {name:"这波能反杀",msg:'嗯嗯', time:'Yesterday',path:'/chat'},
      {name:"Javascript核心进阶.VIP群",msg:'今日更新', time:'Yesterday' ,path:'/profile'},
    
    ]

    this.state = {
      name: '点击更改state',
      teacher: 'mentor',
      classes:['js','react','vue']
    }
  }
  render() {
    return (
      `
      <header class="header">
      <div class="nav-left"></div>
      <div class="nav-content">Wechat（500）</div>
      <div class="nav-right"><span class="add">+</span></div>
      </header>
      <div class ="main-content">
      <ul>
      ${this.data.map(item=>{
        return `<li class="list navigate">
       ${item.path 
        ? `<a class='list__avatar a_link'  href=${item.path} id='aLink'>点击</a>` 
        : "<a class='list__avatar'> </a>"}
        <div class="list__msg">
          <p class="list__msg--detail" >
            <span class="name">${item.name}</span>
            <span class="time">${item.time}</span>
          </p>
          <p class="text">${item.msg}</p>
        </div>
      </li>`
      }).join('')}
      <li class="list navigate" id="changeState">
      <a class='list__avatar'> </a>
      <div class="list__msg">
          <p class="list__msg--detail" >
            <span class="name">${this.state.name}</span>
            <span class="time">${this.state.teacher}</span>
          </p>
          <p class="text">${this.state.classes}</p>
        </div>
      </ul>
      </div>`
    )
  }
  changeMyState(){
    // - 对象格式
    // this.setState({
    //   classes:'all stack'
    // },()=>{
    //   console.log('state',this.state)
    // })
    // - 函数格式
    this.setState((prevState)=>{
      return {
        classes:`I need to study all, ${prevState.classes}`
      }
    })
  }
  componentDidMount(){
    document.getElementById("changeState").addEventListener("click",()=>{ 
      this.changeMyState()
    })
  }
  
}
export default chats;



