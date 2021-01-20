/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
export default class PageStack {
  constructor() {
    this.max = 100;
    this.top = 0; // 记录栈顶的位置
    this.stackData = []; // 初始化
  }
  /**
   * 出栈
   */
  pop() {
    if (this.top) {
      const popData = this.stackData[--this.top];
      this.stackData.splice(this.top, 1);
      return popData;
    }
    return '';
  }
  /**
   * push 入栈
   */
  push(data) {
    if (this.top > this.max) {
      alert('the stack will be over');
    } else {
      this.stackData[this.top++] = data;
    }
  }
  /**
   * 判断是否为栈底
   */
  isStackBottom() {
    if (this.getLen() === 1) {
      return true;
    }
    return false;
  }
  isEmpty() {
    if (!this.top) {
      console.error('Stack is empty');
    } else {
      console.log('stack still has space');
    }
    return !this.top;
  }

  /**
   * 获取栈定元素
   */
  peek() {
    if (this.top) {
      return this.stackData[this.top - 1];
    }
    return '';
  }
  /**
   * 获取栈顶元素的上一个
   */
  getLastChild() {
    if (this.top) {
      return this.stackData[this.top - 2];
    }
    return '';
  }
  /**
   * 判断是否满栈
   */
  isFull() {
    if (this.top > this.max) {
      console.error('Stack is full');
    } else {
      console.log('still can push in ');
    }
    return this.top > this.max;
  }

  /**
   * 清空栈
   */

  clear() {
    this.top = 0;
    delete this.stackData;
    this.stackData = [];
  }

  /**
   * 获取栈中的数据
   */

  getData() {
    console.log('stackData', this.stackData);
    return this.stackData;
  }


  /**
   * 获取栈的长度
   */
  getLen() {
    console.log('getLen:', this.top);
    return this.top;
  }
}
