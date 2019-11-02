const { Given, When, Then } = require('cucumber')

Given(/^user navigates to Edit User Profile page to check for autopay$/, function () {
  //dashboardLib.unsubscribeFromPaperlessBillingfromProfilepage()
  dashboardLib.navigateToEditUserProfilePage()
  //dashboardLib.gotoEditProfilePaperlessEnrollmentSection()
  //dashboardPage.editProfilePaperlessEnrollButton.click()

});

When(/^user navigates to the autopay enrollment section$/, function () {

  dashboardLib.gotoEditProfilePaperlessEnrollmentSection()

});

Then(/^unenroll autopay if it is subscribed and navigate to dashboard \"([^\"]*)\"$/, function (expMessage) {

  dashboardPage.editProfileautopayenrollbutton.waitForExist(20000)
  dashboardLib.navigateToDashboardAfterAutoPayUnEnroll()
    dashboardLib.scrollPage()
  dashboardPage.autoPayText.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.autoPayText, expMessage) 
//  commonLib.assertElementText(dashboardPage.paperlessEnrollmentStatus, expMessage)

});

// Then(/^paperless marketing card is displayed on dashboard page \"([^\"]*)\"$/, function (expMessage) {
//   dashboardLib.scrollPage()
//   dashboardPage.paperlessText.waitForExist(10000)
//   commonLib.assertElementText(dashboardPage.paperlessText, expMessage) 

// /* dashboardPage.paperlessText.waitForExist(10000).then(function(elementFound){
//        if(elementFound){
//          console.log(e)
//          commonLib.assertElementText(dashboardPage.paperlessText, expMessage);
//        }
// }) */

// });
