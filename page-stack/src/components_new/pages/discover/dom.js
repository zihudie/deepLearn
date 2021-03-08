import headerDom from '../../common/header';
import footerDom from '../../common/footer';

const domStr = `<div class="page page3">
${headerDom}<div class ="content">
<ul>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name"> Scan</span>
        <span class="arrow"></span>
      </p>
    </div>
  </li>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name"> Shake</span>
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
        <span class="name">Top Stories</span>
        <span class="arrow"></span>
      </p>
    </div>
  </li>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name">Search</span>
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
        <span class="name">Live Streams & People Nearby</span>
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
        <span class="name">Mini Programs</span>
        <span class="arrow"></span>
      </p>
    </div>
  </li>
</ul>
</div>
${footerDom}
</div>`;

export default domStr;
