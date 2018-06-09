var assert = require('assert');
describe('webdriver.io page', function() {
    xit('should have the right title', function () {
        browser.url('http://scottahatch.org');
        var title = browser.getTitle();
        assert.equal(title, 'Presentations by Scott Hatch');
    });

    xit('should have a section for presentations', function () {
        //browser.url('http://scottahatch.org');
        var presentationsSection = browser.getElementsByClassName('presentations')
        assert.equal(title, 'Presentations by Scott Hatch');
        assert.equal()
    });

    xit('should have arrived via 302 redirect', function () {
        //browser.url('http://scottahatch.org');
        var presentationsSection = browser.getElementsByClassName('presentations')
        assert.equal(title, 'Presentations by Scott Hatch');
    });

    xit('should return 400', function (done) {
      request.get('http://localhost:8000', function (err, res, body){
        expect(res.statusCode).to.equal(302);
        expect(res.body).to.equal('wrong header');
        done();
      });
    });


//page objects


});
