const { Given, When, Then } = require('cucumber')

Given(/^user navigates to feedback modal view$/, function () {
  dashboardLib.navigateToFeedbackModalView()
});

When(/^user selects radio button for first question and second question$/, function () {

  dashboardLib.submitFeedback()

});

Then(/^user submit the feedback form$/, function () {

   dashboardLib.submitFeedbackNew()

});

Then(/^feedback is successfull with message \"([^\"]*)\"$/, function (expMessage) {

  dashboardPage.feedbackStatus.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.feedbackStatus, expMessage)

});


Given(/^again user navigates to feedback modal view$/, function () {
  dashboardLib.navigateToFeedbackModalView()
});

When(/^again user selects radio button for first question and second question and the comment box$/, function () {

  dashboardLib.submitFeedback()
  dashboardPage.commentBox.waitForExist(2000)
  commonLib.assertValue(true, dashboardPage.commentBox.isExisting()) 

});

Then(/^user submit the feedback form again$/, function () {

   dashboardLib.submitFeedbackNew()

});

Then(/^feedback is successfull with a message \"([^\"]*)\"$/, function (expMessage) {

  dashboardPage.feedbackStatus.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.feedbackStatus, expMessage)

});

Given(/^a user navigates to feedback modal view$/, function () {
  dashboardLib.navigateToFeedbackModalView()
});

When(/^user selects radio button for second question only$/, function () {

  commonLib.waitForElementExistWithoutException(dashboardPage.firstQuestionSecondRadioButton, 5000)
       
        if (dashboardPage.secondQuestionSecondRadioButton.isExisting()) {
            dashboardPage.secondQuestionSecondRadioButton.click()
        }

});

Then(/^user tries to submit the feedback form$/, function () {

   dashboardLib.submitFeedbackNew()

});

Then(/^feedback submission ask for the selection of fields with a validation message$/, function () {

  dashboardPage.selectRadioButtonValidationMsg.waitForExist(10000)
  commonLib.assertValue(true, dashboardPage.selectRadioButtonValidationMsg.isExisting()) 
  dashboardPage.feedbackModalClose.click()

});

