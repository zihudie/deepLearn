import headerDom from '../../common/header';
import footerDom from '../../common/footer';

const domStr = `<div class="page page1" >
${headerDom}<div class ="content">
<ul>
  <li class="list navigate" @click="{{navigateTo('navigate')}}">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail" >
        <span class="name">这波能反杀</span>
        <span class="time">Yesterday</span>
      </p>
      <p class="text">嗯嗯</p>
    </div>
  </li>
  <li class="list">
    <div class="list__avatar"></div>
    <div class="list__msg">
      <p class="list__msg--detail">
        <span class="name">Javascript核心进阶.VIP群</span>
        <span class="time">Yesterday</span>
      </p>
      <p class="text">今日更新</p>
    </div>
  </li>
</ul>
</div>
${footerDom}
</div>`;
export default domStr;
