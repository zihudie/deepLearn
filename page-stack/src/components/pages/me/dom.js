import headerDom from '../../common/header';
import footerDom from '../../common/footer';

const domStr = ` 
<div class="page page4">
${headerDom}<div class ="content">

<div class="self-files">
  <div class="list__avatar"></div>
  <div class="list__msg">
    <p class="name">吴小白</p>
    <p class="list__msg--detail">
      <span class="account"> 微信号：*******</span>
      <span class="arrow"></span>
    </p>
  </div>
</div>
<ul>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name"> Pay</span>
        <span class="arrow"></span>
      </p>
    </div>
  </li>
</ul>

<ul>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name"> Favoraites</span>
        <span class="arrow"></span>
      </p>
    </div>
  </li>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name">Moments</span>
        <span class="arrow"></span>
      </p>
    </div>
  </li>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name">Wechat Cards & Offers</span>
        <span class="arrow"></span>
      </p>
    </div>
  </li>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name">Sticker Gallery</span>
        <span class="arrow"></span>
      </p>
    </div>
  </li>
</ul>

<ul>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name">Settings</span>
        <span class="arrow"></span>
      </p>
    </div>
  </li>
</ul>
</div>
${footerDom}
</div>`;

export default domStr;
