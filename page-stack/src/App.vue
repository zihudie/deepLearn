<template>
  <div id="app">
<!-- <header-model/>
<page-model/>
<footer-model/> -->
  </div>
</template>
<script>
import PageStack from './utils/stack';
import Chats from './components/pages/chats/index';
import Contacts from './components/pages/contacts/index';
import Discover from './components/pages/discover/index';
import Me from './components/pages/me/index';

export default {
  name: 'App',
  created() {
    window.pageStack = new PageStack();
    // tabpages
    window.tabPages = null;
    // 初始tabIndex
    window.tabIndex = 0;
  },
  mounted() {
    this.initPage();
  },
  methods: {
    initPage() {
      const chats = new Chats();
      const contacts = new Contacts();
      const discover = new Discover();
      const me = new Me();
      window.tabPages = { 0: chats, 1: contacts, 2: discover, 3: me };
      window.tabPages[window.tabIndex].pushPage();
    },
  },
};
</script>

<style lang="less">
@import "./assets/css/common/common.less";
/** header **/
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  position: absolute;
  top:0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
.header{
  height: 46px;
  display: flex;
  align-items: center;
  background:#fff;
  border-bottom: 1px solid  #f5f5f5;
}
.nav{
  &-left,&-right{
    position: absolute;
    display: flex;
    align-items:center;
    top:0;
    height: 46px;
  }
  &-left{
    left: 0;
    padding-left:15px;
    .go-back{
        width: 6px;
        height: 10px;
        background: url(./assets/arrow.png);
        background-size: 6px 10px;
        transform: rotate(-180deg);
    }
  }
  &-right{
    right: 0;
    padding-right:15px;
    font-size: 16px;
  }
  &-content{
    max-width: 60%;
    margin:0 auto;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.add{
  font-size: 20px;
}

/*** footer ***/
.footer {
  position: absolute;
  height: 50px;
  width: 100%;
  background: #fff;
  left: 0;
  bottom: 0;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.11);
  ul {
    .flex();
    height: 50px;
  }
  li {
    .flex();
    flex:1;
    width: 25%;
    &.active{
      background:rgba(59 ,171, 104 , 0.11)
    }
  }
  .ico {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid green;
    border-radius: 3px;
    margin-bottom: 5px;
  }
}

/** content **/
.content {
  padding: 10px;
}
/*** pages */

.page {
  ul {
    margin-bottom: 5px;
  }

  .list {
    background: #fff;
    .flex(@direction:row,@align:left);
    &__avatar {
      width: 38px;
      height: 38px;
      margin: 0 10px;
      background: darkorange;
      border-radius: 5px;
    }
    &__msg {
      &:not(last-child) {
        border-bottom: 1px solid #f5f5f5;
      }
      padding: 16px 10px 16px 0;
      flex: 1;
      &--detail {
        .flex(@direction:row,@justify:space-between);
      }
      .time {
        font-size: 12px;
        color: #999;
      }
      .arrow {
        width: 6px;
        height: 10px;
        /* eslint-disable */
        // eslint-disable-next-line
        background: url(./assets/arrow.png);
        background-size: 6px 10px;
      }
      .name {
        line-height: 14px;
        font-size: 14px;
        color: #000;
      }

      .text {
        font-size: 12px;
        color: #999;
        padding-top: 6px;
      }
    }
  }

  .alias {
    padding: 10px;
  }
   .self-files {
    margin-bottom: 5px;
    padding: 8px 0;
    background: #fff;
    .flex(@direction:row,@align:left);
    .list__avatar {
      border: 1px solid #665;
      background: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;

    }
    .list__msg{
      border-bottom: none;
    }
    .name {
      font-size: 16px;
      color: #000;
      padding-bottom: 8px;
    }
    .account {
      font-size: 14px;
      color: #666;
    }
  }
}
.page3,
.page4 {
  .list__avatar {
    width: 30px;
    height: 30px;
  }
}
// chats-logs
.chat-views {
  .flex(@direction:row,@justify:flex-start);
  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid rgb(143, 142, 142,.5);
    border-radius: 50%;;
    display: inline-block;
    margin-right: 15px;
  }
  .message {
    position: relative;
    font-size: 14px;
    .chat-log {
      display: block;
      height: 40px;
      line-height: 30px;
      padding: 5px 10px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 4px;
      &:after {
        content: "";
        position: absolute;
        left: -5px;
        top: 15px;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        border-left: 5px solid #fff;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
    }
  }
}

// page.chatlog
.page,.chatdialog{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top:0;
}
</style>
