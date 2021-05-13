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
const  path =  window.location.pathname
window.pages = {
  chat,
  profile,
  MainPage 
}

FastClick.attach(document.body);
// const rootDom = document.getElementById('root')
// 初始化首页
// new MainPage(rootDom).init()
// 路由实例化
window.router = new Router();
// 注册路由
// 注册首页
window.router.add('/',()=>{
  new MainPage().init()
})
// chat页面
window.router.add('/chat',()=>{
   new chat().init()
})
// 个人资料页面
window.router.add('/profile',()=>{
  new profile().init()
})

window.router.init('/')
