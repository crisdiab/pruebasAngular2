import { PruebasNg2Page } from './app.po';

describe('pruebas-ng2 App', () => {
  let page: PruebasNg2Page;

  beforeEach(() => {
    page = new PruebasNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
