const { Given, When, Then } = require('cucumber')
 

Given(/^user navigates to payment menu$/, function () {

  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardLib.navigateToPaymentsHeaderMenu()
});

When(/^user click on cash payment$/, function () {

  dashboardLib.navigateToCashPayment()
  browser.pause(3000)
  dashboardPage.autoPayContinueButtonNew.click()
  browser.pause(3000)

});

Then(/^cash payment selected as default under payment modal view \"([^\"]*)\"$/, function (expMessage) {

    //dashboardPage.conservationTipsText.waitForExist(10000)
    console.log("cash payment label")
    commonLib.assertElementText(dashboardPage.cashpaymentLabel, expMessage)
    console.log("matched cash payment label")
    dashboardPage.makePaymentCloseModalView.click()
    //makePaymentLib.closeMakePaymentWindow()
    browser.pause(5000)

});

Given(/^again user navigates to payment menu$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardLib.navigateToPaymentsHeaderMenu()
});

When(/^user click on make payment$/, function () {

  //dashboardLib.navigateToMakePayment()
  dashboardLib.goToMakePaymentsPage()
  console.log("#####3make payment label")
  browser.pause(3000)
  //dashboardPage.autoPayContinueButtonNew.click()
  browser.pause(3000)

});

Then(/^all the payment methods are displayed under make payment modal view with label \"([^\"]*)\"$/, function (expMessage) {

    //dashboardPage.conservationTipsText.waitForExist(10000)
    dashboardPage.autoPayInMakePayment.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.autoPayInMakePayment.isExisting())    
   // dashboardLib.navigateToNextConservationTips()
    dashboardPage.debitCreditInMakePayment.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.debitCreditInMakePayment.isExisting())
    // dashboardLib.navigateToNextConservationTips()
    dashboardPage.cashInMakePayment.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.cashInMakePayment.isExisting())
    // dashboardLib.navigateToNextConservationTips()
    //browser.pause(1000)
    console.log("make payment label")
    commonLib.assertElementText(dashboardPage.makePaymentLabel, expMessage)
    console.log("matched make payment label")
    dashboardPage.makePaymentCloseModalView.click()
    //makePaymentLib.closeMakePaymentWindow()
    browser.pause(5000)

});

Given(/^again user navigates to payment menu from header$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardLib.navigateToPaymentsHeaderMenu()
});

When(/^user click on Payment Location$/, function () {

  dashboardLib.navigateToPaymentlLocation()

});

Then(/^Payment Location card is displayed with the content text box and a label as \"([^\"]*)\"$/, function (expMessage) {

    dashboardPage.zipCodeTextBoxPL.waitForExist(2000)
    commonLib.assertValue(true, dashboardPage.zipCodeTextBoxPL.isExisting())
    //makePaymentLib.closeMakePaymentWindow()
    console.log("nearestLocationText")
    commonLib.assertElementText(dashboardPage.nearestLocationText, expMessage)
    console.log("nearestLocationText")
    dashboardPage.highlightOverlay.click()
    browser.pause(3000)

});

Given(/^again user navigates to usage menu from header$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardLib.navigateToUsageHeaderMenu()
});

When(/^user click on usage overview sub menu$/, function () {

  dashboardLib.navigateToUsageOverviewFromUsageMenu()

});

Then(/^usage overview card is displayed in focus with a label as \"([^\"]*)\"$/, function (expMessage) {

    console.log("usage overview text")
    commonLib.assertElementText(dashboardPage.usageOverviewText, expMessage)
    console.log("matched usage overview text")
    commonLib.scrollToScreenBottom()
    dashboardPage.highlightOverlay.click()
    browser.pause(5000)

});

Given(/^again user navigates to usage menu header menu present in dashboard$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardLib.navigateToUsageHeaderMenu()
});

When(/^user click on usage projection sub menu$/, function () {

  dashboardLib.navigateToUsageProjectionFromUsageMenu()

});

Then(/^usage projection card is displayed in focus with a label as \"([^\"]*)\"$/, function (expMessage) {

    console.log("usageProjectionText")
    commonLib.assertElementText(dashboardPage.usageProjectionText, expMessage)
    console.log("matched usageProjectionText")
    //commonLib.scrollToScreenBottom()
    dashboardPage.highlightOverlay.click()
    browser.pause(5000)

});

//Contact Us Link

When(/^user click on Contact Us$/, function () {
    
    navyFooterLinksLib.ContactUsNavigation()
    
}); 

Then(/^user validate Contact Us page with text \"([^\"]*)\"$/, function (expMessage) {
    
    commonLib.switchWindowTab()
    var ContactUsPageText = commonLib.getElementText(dashboardPage.ContactusText)
    console.log(ContactUsPageText);
    commonLib.assertElementText(dashboardPage.ContactusText, expMessage)
    
});

Then(/^verify Contact Us page by validating url$/, function () {
    
    navyFooterLinksLib.validateContactUs()
    
}); 
