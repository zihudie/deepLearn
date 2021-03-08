/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import Page from '@/utils/page';
import profileDom from './profileDom';

class ChatDialogPage extends Page {
  constructor() {
    super();
  }
  render() {
    return profileDom;
  }
  goBack() {
    this.removePage();
  }
}

export default ChatDialogPage;
