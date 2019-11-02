const { Given, When, Then } = require('cucumber')

    Given(/^I navigate to Google$/, () => {
      browser.url('http://www.google.com')
    }); 

    When(/^I search for \"([^\"]*)\"$/, (text) => {
      browser.setValue('#lst-ib', text);
      console.log("Searched " + text)
      var temp = "testString"
      browser.pause(5000);
    });

    When(/^I search for new result \"([^\"]*)\"$/, (text) => {
      browser.setValue('#lst-ib', text);
      console.log("Searched " + text)
      browser.pause(5000);
    });

