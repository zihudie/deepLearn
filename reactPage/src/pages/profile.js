
import Components from '@/components/components'
const domStr = `<div class="chatdialog">
<header class="header">
<div class="nav-left go" id='goback'><span class="go-back"></span></div>
<div class="nav-content">个人资料</div>
<div class="nav-right" ></div>
</header>
<div class="content">
   <div style="text-align:center;font-size:16px">个人资料</div>
</div>
</div>`;

class Chats extends Components {
  render() {
    return domStr;
  }
  componentDidMount(){
    const goBack  = document.getElementById("goback")
    goBack.addEventListener("click",()=>{
      window.router.goBack()
    })
  }
}
export default Chats;
