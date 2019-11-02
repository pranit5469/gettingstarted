const { Given, When, Then } = require('cucumber')

Given(/^user navigates to Billing and Payments page$/, function () {

    dashboardLib.goToBillingAndPaymentsPage()

});

When(/^user slides the slider bar to set statement period for 1 month$/, function () {

    billAndPaymentsLib.setSliderHandleStartFromDefaultToLaterMonth()

});

Then(/^billing and payments table should display transactions only for the selected statement period$/, function () {

    expect(billAndPaymentsLib.areDatesDisplayedInBillingAndPaymentsTableWithinRange()).to.be.true

});

When(/^user clicks on the invoicing link under column TRANSACTION TYPE$/, function () {

    billAndPaymentsLib.clickOnInvoicingLinkTranscationType()

});

When(/^user clicks on the service link under column IMPORTANT INFORMATION$/, function () {

    billAndPaymentsLib.clickOnServiceLinkImpotantInformation()

});

Then(/^information is displayed in a new tab$/, function () {

    expect(2).to.equal(commonLib.getTabCount(), "Tab count");
    commonLib.switchToTab(1)

});

Then(/^new tab contains information as pdf$/, function () {

    expect(billAndPaymentsLib.isInvoicingPdfDisplayed()).to.be.true;
});

Then(/^user closes new tab$/, function () {

    browser.close()
    commonLib.switchToTab(0)

});