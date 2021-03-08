/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import Page from '@/utils/page';
import chatPageDom from './chatDom';
import Profile from '../profile';

class ChatDialogPage extends Page {
  constructor() {
    super();
  }
  render() {
    return chatPageDom;
  }
  goBack() {
    this.removePage();
  }
  navigateTo() {
    const profile = new Profile();
    profile.pushPage();
  }
}

export default ChatDialogPage;
