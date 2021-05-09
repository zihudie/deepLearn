import Components from '@/components/components'
class chats extends Components {
  constructor(parentNode) {
    super(parentNode)
    this.data =  [
      {name:"这波能反杀",msg:'嗯嗯', time:'Yesterday',path:'/chat'},
      {name:"Javascript核心进阶.VIP群",msg:'今日更新', time:'Yesterday' },
      {name:"点击修改state",msg:'state', time:'Yesterday' },
    ]
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
        ? "<a class='list__avatar a_link'  path='/chat'>点击</a>"  
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
      </ul>
      </div>`
    )
  }
  renderDom(){
    return this.render()
  }
}
export default chats;



