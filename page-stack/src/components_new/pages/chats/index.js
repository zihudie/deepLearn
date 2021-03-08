/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import Page from '@/utils/page';
import ChatDialogPage from '../chatDialog';
import domStr from './dom';

class Chats extends Page {
  constructor() {
    super();
  }
  render() {
    return domStr;
  }
  navigateTo() {
    const chatDialogPage = new ChatDialogPage();
    chatDialogPage.pushPage();
  }
}
export default Chats;
