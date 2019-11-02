const { Given, When, Then } = require('cucumber')

Given(/^user navigates to usage menu$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardLib.navigateToUsageHeaderMenu()
});

When(/^user click on Conservation Tips$/, function () {

  dashboardLib.navigateToConservationTips()

});

Then(/^Conservation tips is displayed on the card \"([^\"]*)\"$/, function (expMessage) {

    //dashboardPage.conservationTipsText.waitForExist(10000)
    console.log("conservation tips text")
    commonLib.assertElementText(dashboardPage.conservationTipsText, "Conservation Tips")
    console.log("matched conservation tips text")
    dashboardPage.highlightOverlay.click()
    browser.pause(5000)

});

Given(/^again user navigates to usage menu$/, function () {
  
  dashboardLib.navigateToUsageHeaderMenu()
});

When(/^again user click on Conservation Tips$/, function () {

  dashboardLib.navigateToConservationTips()

});

Then(/^user navigates to each conservation tips and verify the content$/, function () {


    dashboardPage.tipTitle.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.tipTitle.isExisting())    
    dashboardLib.navigateToNextConservationTips()
    dashboardPage.tipTitle.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.tipTitle.isExisting())
    dashboardLib.navigateToNextConservationTips()
    dashboardPage.tipTitle.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.tipTitle.isExisting())
    dashboardLib.navigateToNextConservationTips()
    browser.pause(1000)
    dashboardPage.highlightOverlay.click()
    browser.pause(3000)

});


Given(/^user navigates to usage menu to verify detailed content$/, function () {
  
  dashboardLib.navigateToUsageHeaderMenu()
});

When(/^user click on Conservation Tips to verfiy detailed content$/, function () {

  dashboardLib.navigateToConservationTips()

});

Then(/^user navigates to each conservation tips and verify the content for each tips$/, function () {

    browser.pause(2000)
    dashboardPage.tipSummary.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.tipSummary.isExisting()) 
    commonLib.assertValue(true, dashboardPage.tipSummary.isExisting())    
    dashboardLib.navigateToNextConservationTips()
    dashboardPage.tipSummary.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.tipSummary.isExisting())
    commonLib.assertValue(true, dashboardPage.tipSummary.isExisting()) 
    dashboardLib.navigateToNextConservationTips()
    dashboardPage.tipSummary.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.tipSummary.isExisting())
    commonLib.assertValue(true, dashboardPage.tipSummary.isExisting()) 
    dashboardLib.navigateToNextConservationTips()
    browser.pause(1000)
    dashboardPage.highlightOverlay.click()
    browser.pause(3000)

});




