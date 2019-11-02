const { Given, When, Then } = require('cucumber')

Given(/^user navigates to Edit User Profile page and clicks on Unenroll button$/, function () {
  dashboardLib.subscribeToPaperlessBilling()
  dashboardLib.navigateToEditUserProfilePage()
  dashboardLib.gotoEditProfilePaperlessEnrollmentSection()
  dashboardPage.editProfilePaperlessEnrollButton.click()

});

When(/^user accepts acknowledgement and submits form$/, function () {

  dashboardLib.submitPaperlessEnrollmentAck()

});

Then(/^discontinue paperless billing successfull message is displayed \"([^\"]*)\"$/, function (expMessage) {

  dashboardPage.paperlessEnrollmentStatus.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.paperlessEnrollmentStatus, expMessage)

});

Then(/^user closes success mesage dialog and go paperless card is displayed in Dashboard$/, function () {

  dashboardLib.closePaperlessEnrollmentWindow()
  browser.back()
  commonLib.scrolToScreenTop()
  dashboardPage.goPaperlessCard.waitForExist(10000)
  commonLib.assertValue(true, dashboardPage.goPaperlessCard.isExisting())

});

Given(/^user click on Go Paperless Card in Dashboard$/, function () {

  dashboardLib.unsubscribeFromPaperlessBilling()
  dashboardPage.gopaperlessCardSignupButton.waitForExist(10000)
  commonLib.clickElement(dashboardPage.gopaperlessCardSignupButton)

});

Then(/^Paperless billing enrollment form must be seen$/, function () {

  commonLib.assertValue(true, dashboardPage.paperlessBillingEnrollmentWindow.isExisting())

});

Then(/^Thank you message is seen \"([^\"]*)\"$/, function (expMessage) {

  commonLib.assertElementText(dashboardPage.paperlessThankyouMessage, expMessage)
  

});

Then(/^user closes Paperless billing enrollment dialog$/, function () {

  dashboardLib.closePaperlessEnrollmentWindow()

});



Then(/^user acknowledgement message is seen \"([^\"]*)\"$/, function (expmessage) {

  commonLib.assertElementText(dashboardPage.paperlessUserAck, expmessage)

});

When(/^user checks the acknowledgement checkbox and submits$/, function () {

  dashboardLib.submitPaperlessEnrollmentAck()

});

Then(/^paperless enrollment successfull message is seen \"([^\"]*)\"$/, function (expMessage) {

  dashboardPage.paperlessEnrollmentStatus.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.paperlessEnrollmentStatus, expMessage)

});

Then(/^go paperless card must not be visible in Dashboard$/, function () {

  dashboardPage.goPaperlessCard.waitForExist(10000, true)
  commonLib.assertValue(false, dashboardPage.goPaperlessCard.isExisting())

});