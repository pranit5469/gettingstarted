var json = require('json-file');
var file = json.read('./utilities/testData.json');

class CommonFunctions {

    loadPage(url){
        browser.url(url)
    }

    parseIntergerFromString(stringValue){

        var regex = /-?\d*\.{0,1}\d+/g;
        var regexArray = regex.exec(stringValue);

        return parseFloat(regexArray[0]).toFixed(2)

    }

    clickElement(element){

        element.getLocationInView()
        element.waitForVisible(10000)
        element.click()

    }

    getElementText(element) {
        element.waitForExist(10000)
        browser.pause(3000)
        return element.getText()
    }

    assertElementText(element, expectedText) {
        element.waitForExist(10000)
        expect(element.getText().trim()).to.equal(expectedText);
    }

    assertValue(exp, act){
        expect(exp).to.equal(act);
        
    }

    waitForElementExistWithoutException(element, timeout){
        try {

            element.waitForExist(timeout)
            
        } catch (error) {
            
            console.log("Element did not exist within the time limit")
        }
    }

    waitForElementVisibleWithoutException(element, timeout){
        try {

            element.waitForVisible(timeout)
            
        } catch (error) {
            
            console.log("Element did not appear within the time limit")
        }
    }

    clickButtonByQuerySelector(selector){

        console.log("Attempting to click by query selector on element " + selector)
        console.log("Exists: "  + browser.isExisting(selector))
        browser.execute(function(selector) {
            document.querySelector(selector).click()
            
        }, selector)
        
    }

    getCurrentMonth(format) {
        let date = new Date()
        //format: long, short
        let currentMonth = date.toLocaleString("en-us", { month: format });
        console.log(`Current month is ${currentMonth}`)
        return currentMonth
    }

    getLastMonth(format) {
        let x = new Date();
        x.setDate(1);   
        x.setMonth(x.getMonth()-1);
        let date = new Date(x)
        //format: long, short
        let lastMonth = date.toLocaleString("en-us", { month: format });
        console.log(`Last month is ${lastMonth}`)
        return lastMonth
    }

    getLastMonthYear(){
        let x = new Date();
        x.setDate(1);
        x.setMonth(x.getMonth()-1);
        let date = new Date(x)
        console.log(`Year associated with last month is ${date.getFullYear()}`)
        return date.getFullYear()
    }

    getLastMonthFirstDay() {
        let x = new Date();
        x.setDate(1);
        x.setMonth(x.getMonth()-1);
        console.log(`Last month first day is ${x}`)
        return x
    }

    getJulianDate(){

        let today = new Date();
        let currentDay = today.getDate();
        let currentmonth = today.getMonth(); //January is 0
        let temp = file.get('testData.julianMonth.' + (currentmonth)) + currentDay
        let julianDate = (temp).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
        
        return julianDate;

    }

    scrolToScreenTop(){

        browser.execute(function(){
            document.querySelector("#root").scrollTo(0,0)
        })

    }

    switchWindowTab(){
       let handles = browser.windowHandles();
      
      // console.log('TabId 1:'+browser.getCurrentTabId());
       var tab1 = browser.getCurrentTabId();
       console.log('TabId 1:' +handles.value[0]);
       //browser.switchTab(handles[0]).pause(2000);
       console.log('TabId 2:'+browser.getCurrentTabId());
       browser.switchTab(handles.value[1])
   }

    scrollToScreenBottom(){

        browser.execute(function(){
            var root = document.querySelector("#root")
            root.scrollTo(0, root.scrollHeight)

        })

    }

    isTextInDollarFormat(testString){

        let regex = /^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/;
        return regex.test(testString)

    }

    isPhoneNumberNANP(number){

        let regex = /^\(?([2-9][0-9]{2})\)?[-. ]?([2-9](?!11)[0-9]{2})[-. ]?([0-9]{4})$/
        return regex.test(number)
    }

    switchToTab(tabIndex){
        let handles = browser.windowHandles();
        console.log(`Total number of active tabs: ${handles.value.length}`)
        browser.switchTab(handles.value[tabIndex]).pause(2000);
        console.log(`Switched control to tab: ${tabIndex}\nPageTitle: ${browser.getTitle()}`)
    }

    getTabCount(){
        return browser.windowHandles().value.length;
    }

}

module.exports = new CommonFunctions();
