var home = require('../../pageObjects/home.page.js');

var json = require('json-file');
var homeData = json.read('./pageObjects/home.page.json');
var productData = json.read('./pageObjects/cart.page.json');


describe("Navigate to different pages", function(){

    beforeEach(function(){
        /* var reporter = require('wdio-allure-reporter')
        reporter.feature(this.currentTest.parent.fullTitle() + ' - Execution: ' + browser.desiredCapabilities.browserName); */

        browser.url('./');

    });

    it("should link to products page", function(){
    
        home.vastRobotSelectionLink.click();
        var expectedBrowerTitle = browser.getTitle();
        var actualBrowerTitle = productData.get('cartPage.testData.pageTitle')

        expect(expectedBrowerTitle).to.equal(actualBrowerTitle);
        
    })

    it("should link to About page", function(){
    
        home.AboutUsLink.click();

        var expectedBrowerTitle = browser.getTitle();
        var actualBrowerTitle = homeData.get('homePage.testData.pageTitle')

        expect(expectedBrowerTitle).to.equal(actualBrowerTitle);
        
    })

})


    