/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import Page from '@/utils/page';
import domStr from './dom';

class Discover extends Page {
  constructor() {
    super();
  }
  render() {
    return domStr;
  }
}
export default Discover;
