// import React from 'react';
// import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import Router from './components/router';
/**
 * 
 */
import MainPage from './pages/main/index'
import chat from './pages/chat'
import profile from './pages/profile'

// 将事件a绑定
import viewChange from './utils/viewChange';

// import './utils/setRem';
import './style/base.css';
import './style/index.less';

window.pages = {
  chat,
  profile,
  MainPage 
}

FastClick.attach(document.body);
/**
 * 引入mainPage [首頁]
 */
const rootDom = document.getElementById('root')
// 初始化首页
new MainPage(rootDom).init()

window.router = new Router();
// viewChange(window.router)

registerServiceWorker();
