
import Components from '@/components/components'
const domStr = `<div class="chatdialog">
<header class="header">
<div class="nav-left goBack" id="goBack"><span class="go-back"></span></div>
<div class="nav-content"></div>
<div class="nav-right navigateTo"><a href='/profile' alt='个人资料' class="a_link">进入个人资料</a></div>
</header>
<div class="content">
  <div class="chat-views">
    <span class="avatar"></span>
    <div class="message">
      <div class="chat-log">好好学习，天天向上</div>
    </div>
  </div>
</div>
</div>`;
class Chats extends Components {
  render() {
    return domStr;
  }
  componentDidMount(){
    const goBack  = document.getElementById("goBack")
    goBack.addEventListener("click",()=>{
      window.router.goBack()
    })
  }
}
export default Chats;
