var home = require('../../pageObjects/home.page.js');

var json = require('json-file');
var homeData = json.read('./pageObjects/home.page.json');
var productData = json.read('./pageObjects/cart.page.json');
require('../../utilities/commonFunctions.js')


describe("POC for Amwater test automation", function(){

    beforeEach(function(){
        browser.url('./');
    });

    it("login to amwater and navigate to Make Payments page", function(){
    
        browser.setValue('#j_username','rlborland')
        browser.setValue('#j_password', 'P1assword')
        browser.click("img[alt='Login']")
        paperLessUrl = browser.getUrl();

        if (paperLessUrl.includes('paperlessBillingInterceptEnroll.do')) {
            browser.click('button[data-form="noThanksForm"]');
        }

        let spinner = '//div[@class="fade-leave fade-leave-active"]'
        browser.waitForExist(spinner, 60000)
        browser.waitForExist('//a[text()="Payments"]', 10000)
        browser.moveToObject('//a[text()="Payments"]')
        browser.click('//a[text()="Make Payment"]')
        browser.waitForExist('//label[text()="Electronic Check"]', 30000)
        browser.click('//div[label[text()="Electronic Check"]]')
        browser.waitForExist('.amw-bill-payment-iframe', 10000)
        browser.waitForVisible('.amw-bill-payment-iframe', 10000)
        browser.frame(0)
        browser.waitWithoutError()

        
        try {

            browser.waitForExist("//hbody")
            
        } catch (error) {

            console.log("Handled")
            
        }

        console.log('Pay textbox' + browser.element('.scaled').getValue())
        //browser.debug()
        
        browser.waitForExist('.scaled', 10000)

        

        browser.setValue('.scaled', "50.00")
        browser.click('.btn-action.btn-type-next')
        browser.waitForExist('.checkboxContainer')
        browser.click('.checkboxContainer')
        browser.click('.btn-action.btn-type-next.click-timeout')
        browser.debug()

    })

    

})


    