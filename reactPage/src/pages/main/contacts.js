
import Components from '@/components/components'
class contacts extends Components {
  render() {
    console.log("main page______page2 chats")
    return (
     `
      <header class="header">
      <div class="nav-left"></div>
      <div class="nav-content">contacts</div>
      <div class="nav-right"></div>
      </header>
      <div class ="main-content">
      <ul>
        <li class="list">
          <div class="list__avatar"></div>
          <div class="list__msg">
            <p class="list__msg--detail">
              <span class="name"> New Friends</span>
            </p>
          </div>
        </li>
        <li class="list">
          <div class="list__avatar"></div>
          <div class="list__msg">
            <p class="list__msg--detail">
              <span class="name"> Group Chats</span>
            </p>
          </div>
        </li>
        <li class="list">
          <div class="list__avatar"></div>
          <div class="list__msg">
            <p class="list__msg--detail">
              <span class="name">Tags</span>
            </p>
          </div>
        </li>
        <li class="list">
          <div class="list__avatar"></div>
          <div class="list__msg">
            <p class="list__msg--detail">
              <span class="name">Official Accounts</span>
            </p>
          </div>
        </li>
      </ul>
      <div class="anchor">
        <p class="alias">A</p>
        <ul>
          <li class="list">
            <div class="list__avatar"></div>
            <div class="list__msg">
              <p class="list__msg--detail">
                <span class="name">阿福</span>
              </p>
            </div>
          </li>
        </ul>
        <p class="alias">B</p>
        <ul>
          <li class="list">
            <div class="list__avatar"></div>
            <div class="list__msg">
              <p class="list__msg--detail">
                <span class="name">Baymax</span>
              </p>
            </div>
          </li>
          <li class="list">
            <div class="list__avatar"></div>
            <div class="list__msg">
              <p class="list__msg--detail">
                <span class="name">Beebobby</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      </div>
   `)
    }
  }
  export default contacts;
