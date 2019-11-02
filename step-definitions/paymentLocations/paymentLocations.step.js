const { Given, When, Then } = require('cucumber')

When(/^user clicks on Payment Locations search button in Dashboard$/, function () {

    paymentLocationsLib.navigateToPaymentLocationsPage()
});

Then(/^payments locations page is displayed$/, function () {

    commonLib.assertValue(true, paymentLocationsPage.cashPaymentLocationView.isExisting())

});

Then(/^show more link is displayed and disabled$/, function () {

    commonLib.assertValue(true, paymentLocationsPage.showMoreLink.isVisible())
    commonLib.assertValue(false, paymentLocationsLib.isShowMoreLinkEnabled())

});

Then(/^no search location results is shown$/, function () {

    paymentLocationsPage.noSearchResultLabel.waitForExist(10000)
    commonLib.assertValue(false, paymentLocationsPage.locationContainer.isVisible())

});

Then(/^search result pane has text \"([^\"]*)\" displayed$/, function (expResultMsg) {

    commonLib.assertElementText(paymentLocationsPage.noSearchResultLabel, expResultMsg)

});

When(/^user enters \"([^\"]*)\"$/, function (zipCode) {

    paymentLocationsPage.zipCodeTextbox.setValue(zipCode)

});

When(/^user clicks on Search button$/, function () {

    paymentLocationsPage.searchButton.click()
    paymentLocationsLib.waitUntilShowLinkIsEnabled()

});

Then(/^show more link is enabled$/, function () {

    commonLib.assertValue(true, paymentLocationsLib.isShowMoreLinkEnabled())

});

Then(/^number of search results displayed is \"([^\"]*)\"$/, function (expNumberOfResults) {
    
    commonLib.assertValue(expNumberOfResults, paymentLocationsLib.getNumberOfSearchLocationsDisplayed())

});

When(/^user clicks on show more link$/, function () {

    paymentLocationsLib.waitUntilShowLinkIsEnabled()
    paymentLocationsPage.showMoreLink.click()

});

When(/^user enter \"([^\"]*)\" and clicks on search button$/, function (zipcode) {

    paymentLocationsPage.zipCodeTextbox.setValue(zipcode)
    paymentLocationsPage.searchButton.click()
    

});

Then(/^address displayed must contain \"([^\"]*)\"$/, function (state) {

    let status = paymentLocationsLib.verifyAddressContainsStateForAllResults(state)
    commonLib.assertValue(true, status)
    console.log("Executed")

});

Then(/^fee displayed must be in currency format with two decimal digits$/, function () {

    commonLib.assertValue(true, paymentLocationsLib.isAllCurrenciesDisplayedInDollarFormat())

});

Then(/^phone number is displayed in NANP format$/, function () {

    commonLib.assertValue(true, paymentLocationsLib.isAllNumbersDispalyedInNANPOrNAFormat())

});



