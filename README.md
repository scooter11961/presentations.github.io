# scooterhat.github.com

This is a group of slides that I have used at internal Lunch & Learns, brown bags, etc.
They can be viewed here: http://scooter11961.github.io/

updated to include continuous delivery maturity model.



Tests:
* Tests are covered with webdriverio

Prerequisites to running tests are:
  * JDK 9.0
  * brew install node
  * npm install webdriverio
  * curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar
  * curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-macos.tar.gz | tar xz
  * download http://chromedriver.storage.googleapis.com/index.html?path=2.32/

Running tests:
    * Start standalone selenium server
    * java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.0.1.jar
    * run tests
    * node test.js


* Or, use wdio 
    npm install wdio
    wdio wdio.conf.js
    ./node_modules/.bin/wdio wdio.conf.js
