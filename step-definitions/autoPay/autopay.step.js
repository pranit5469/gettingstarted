const { Given, When, Then } = require('cucumber')

//**********************************Scenario Starts :  User has an option to enroll for AutoPay ********************************************************//

Given(/^user is not enrolled for AutoPay$/, function () {
  autopayLib.ensureUserisNotEnrolledforAutoPay()

});

When(/^user enrolls for AutoPay and gets \"([^\"]*)\"$/, function (expMessage) {
  autopayLib.enrollforAutoPay()
  autoPaypage.autopaysuccessmsgTitle.waitForExist(10000)
  commonLib.assertElementText(autoPaypage.autopaysuccessmsgTitle, expMessage)
});

Then(/^user closes success message dialog and AutoPay card is not displayed in Dashboard$/, function () {
 //commonLib.assertElementText(autoPaypage.autopaysuccessmsg, "Once your banking information has been confirmed, automatic withdrawal will take effect with your next bill. This could take up to five days. Please continue to pay your bill manually until your bill reflects ~Paid Electronically~.")
 autoPaypage.xicon.click()
 commonLib.scrolToScreenTop()
 autoPaypage.autoPayCard.waitForExist(10000,true)

});

//**********************************Scenario Ends :  User has an option to enroll for AutoPay ********************************************************//



//**********************************Scenario Starts : User has an option to Cancel AutoPay Enrollment ************************************************//


Given(/^user is enrolled for AutoPay$/, function () {
 
  autopayLib.ensureUserisEnrolledforAutoPay()

});

When(/^user cancels AutoPay enrollment and gets the message \"([^\"]*)\"$/, function (expMessage) {
 
  autoPaypage.editProfileautopayenrollbutton.click()
  autopayLib.cancelautoPayenrollment()
  autoPaypage.autopaysuccessmsgTitle.waitForExist(10000)
  commonLib.assertElementText(autoPaypage.autopaysuccessmsgTitle, expMessage)
});

Then(/^user closes success message dialog and AutoPay card is now displayed in Dashboard$/, function () {
 
 autoPaypage.xicon.click()
 commonLib.scrolToScreenTop()
 autoPaypage.editProfileautopayenrollbutton.waitForExist(10000)
 console.log(autoPaypage.editProfileautopayenrollbutton.getText())
 browser.back()
 commonLib.scrolToScreenTop()
 autoPaypage.autoPayCard.waitForExist(10000,false)

});

//**********************************Scenario Ends : User has an option to Cancel AutoPay Enrollment ***************************************************//



//**********************************Scenario Starts : User has an option to Update AutoPay Information ************************************************//


Given(/^user is enrolled for AutoPay to update information$/, function () {
 
  autopayLib.ensureUserisEnrolledforAutoPay()

});

When(/^user updates AutoPay enrollment and gets the message \"([^\"]*)\"$/, function (expMessage) {
 
  autoPaypage.editProfileautopayenrollbutton.click()
  autopayLib.updateautoPayenrollment()
  autoPaypage.autopaysuccessmsgTitle.waitForExist(10000)
  commonLib.assertElementText(autoPaypage.autopaysuccessmsgTitle, expMessage)
});

Then(/^user closes success message dialog and AutoPay card is displayed with updated Information$/, function () {
 
 autoPaypage.xicon.click()
 commonLib.scrolToScreenTop()
 autoPaypage.editProfileautopayenrollbutton.waitForExist(10000)
 console.log(autoPaypage.editProfileautopayenrollbutton.getText())
 browser.back()
 commonLib.scrolToScreenTop()
 autoPaypage.autoPayCard.waitForExist(10000,true)

});

//**********************************Scenario Ends : User has an option to Update AutoPay Information ***************************************************//




