import { ExpensesSplitterPage } from './app.po';

describe('expenses-splitter App', () => {
  let page: ExpensesSplitterPage;

  beforeEach(() => {
    page = new ExpensesSplitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
