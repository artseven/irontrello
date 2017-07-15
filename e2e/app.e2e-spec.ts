import { IrontrelloPage } from './app.po';

describe('irontrello App', () => {
  let page: IrontrelloPage;

  beforeEach(() => {
    page = new IrontrelloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
