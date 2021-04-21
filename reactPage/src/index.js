// import React from 'react';
// import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import Router from './utils/router';
// 将事件a绑定
import viewChange from './utils/viewChange';

// import './utils/setRem';
import './style/base.css';
import './style/index.less';
import MainPage from './pages/main/index'
FastClick.attach(document.body);

/**
 * 引入mainPage [首頁]
 */
const rootDom = document.getElementById('root')
// 初始化首页
new MainPage(rootDom) 
window.router = new Router();
viewChange(window.router)


registerServiceWorker();
