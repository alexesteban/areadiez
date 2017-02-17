import { AreadiezPage } from './app.po';

describe('areadiez App', () => {
  let page: AreadiezPage;

  beforeEach(() => {
    page = new AreadiezPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
