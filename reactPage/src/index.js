// import React from 'react';
// import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
// import registerServiceWorker from './registerServiceWorker';
import Router from './components/router';
/**
 * 
 */
import MainPage from './pages/main/index'
import chat from './pages/chat'
import profile from './pages/profile'

// 将事件a绑定
import './style/base.css';
import './style/index.less';
// const  path =  window.location.pathname
window.pages = {
  chat,
  profile,
  MainPage 
}

FastClick.attach(document.body);
// const rootDom = document.getElementById('root')
// 初始化首页
// new MainPage(rootDom).init()
const routerConfig  = [
  {
    path:"/",
    component:MainPage
  },
  {
    path:"/chat",
    component:chat
  },
  {
    path:"/profile",
    component:profile
  }
]
const  router = new Router();
// 路由注册
function createRouter(){
  routerConfig.forEach((item)=>{
    router.add(item.path,()=>{
      new item.component().init()
    })
  })
}
createRouter()
// 路由实例化
router.init('/')


 