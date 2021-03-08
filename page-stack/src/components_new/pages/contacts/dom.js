import headerDom from '../../common/header';
import footerDom from '../../common/footer';

const domStr = `<div class="page page2">
${headerDom}<div class ="content">
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
${footerDom}
</div>`;
export default domStr;
