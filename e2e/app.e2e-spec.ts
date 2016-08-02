import { AavPage } from './app.po';

describe('aav App', function() {
  let page: AavPage;

  beforeEach(() => {
    page = new AavPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
