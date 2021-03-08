const headerStr = ` <header class="header">
<div class="nav-left goBack" @click="{{goBack('goBack')}}"><span class="go-back"></span></div>
<div class="nav-content"></div>
<div class="nav-right navigateTo" @click="{{navigateTo('navigateTo')}}" >...</div>
</header>`;
export default headerStr;
