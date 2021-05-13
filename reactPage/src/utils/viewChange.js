import chat from '../pages/chat'
import profile from '../pages/profile'
const pages = {
  chat,
  profile 
}
const viewChange = function(router) {
  let root = document.getElementById("root")
  root.addEventListener("click", e => {
    if (e.target.nodeName === 'A') {
      e.preventDefault()
      const path = e.target.getAttribute('path')
      if (path) {
        const _path = path.split("/")[1]
        router.push( new pages[_path]())
      }
    }
  })
 
  /**
   * 浏览器的路由监控  进行解析操作
   */  
}


export default viewChange