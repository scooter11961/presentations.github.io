import Home from '../page_objects/sah_homepage.js';

describe('scottahatch assertion demo', () => {

    before('On the home page...', () => {
      Home.open();
      // Home.searchBar.waitForExist();
      // Home.searchBar.waitForVisible();
    });

    it('Has the expected title', () => {
      // Home.searchBar.click();
      // Home.searchBar.setValue('qa testing');
      // Home.submitSearch.click();
      assert.equal(Home.title, 'Presentations by Scott Hatch');
    });
});
