const { Given, When, Then } = require('cucumber')
//Privacy Policy link verification
When(/^user clicks on Privacy Policy link in Footer$/, function () {

    footerLinkLib.navigateToPrivacyPolicy()
    
});

Then(/^user validate Privacy Policy page with page title \"([^\"]*)\"$/, function (expMessage) {

    commonLib.switchWindowTab()
    var privacyHeaderText = commonLib.getElementText(footerLinkPage.PrivacyPolicyHeadertag)
    console.log(privacyHeaderText);
    commonLib.assertElementText(footerLinkPage.PrivacyPolicyHeadertag, expMessage)
        
});


Then(/^Privacy Policy link is successfully redirecting to Privacy Policy Page by validating page url$/, function () {
    
    footerLinkLib.validatePrivacyPolicyPage()
    browser.pause(3000)
    
}); 

//Terms of Use link verification
When(/^user clicks on Terms Of Use link in Footer$/, function () {

    footerLinkLib.navigateToTermsofUse()
        
});

Then(/^user validate Terms of Use page with page title \"([^\"]*)\"$/, function (expMessage) {

    commonLib.switchWindowTab()
    var termsOfUseHeaderText = commonLib.getElementText(footerLinkPage.TermsOfUseHeadertag)
    console.log(termsOfUseHeaderText);
    commonLib.assertElementText(footerLinkPage.TermsOfUseHeadertag, expMessage)
    
    
});

Then(/^Terms of Use link is successfully redirecting to Terms of Use Page by validating page url$/, function () {

footerLinkLib.validateTermsOfUsePage()
browser.pause(3000)

});

//Feedback footer link scenario 1
Given(/^user navigates to feedback from footer link$/, function () {
        commonLib.scrollToScreenBottom()
       dashboardPage.footerFeedback.waitForExist(50000)
       commonLib.clickElement(dashboardPage.footerFeedback)
       browser.pause(3000)
});

When(/^user selects radio button for first question and second question for footer$/, function () {

  dashboardLib.submitFeedback()

});

Then(/^user submit the feedback form for footer$/, function () {

   dashboardLib.submitFeedbackNew()

});

Then(/^feedback is successfull with message for footer first \"([^\"]*)\"$/, function (expMessage) {

  dashboardPage.feedbackStatus.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.feedbackStatus, expMessage)

});

//Feedback footer link scenario 2


Given(/^again user navigates to feedback from footer link$/, function () {
  
       commonLib.scrollToScreenBottom()
       dashboardPage.footerFeedback.waitForExist(50000)
       commonLib.clickElement(dashboardPage.footerFeedback)
       browser.pause(3000)
});

When(/^again user selects radio button for first question and second question and the comment box for footer$/, function () {

  dashboardLib.submitFeedback()
  dashboardPage.commentBox.waitForExist(2000)
  commonLib.assertValue(true, dashboardPage.commentBox.isExisting()) 

});

Then(/^user submit the feedback form again for footer$/, function () {

   dashboardLib.submitFeedbackNew()

});

Then(/^feedback is successfull with a message for footer second \"([^\"]*)\"$/, function (expMessage) {

  dashboardPage.feedbackStatus.waitForExist(10000)
  commonLib.assertElementText(dashboardPage.feedbackStatus, expMessage)

});

// Feedback footer link scenario 3

Given(/^a user navigates to feedback from footer link$/, function () {

       commonLib.scrollToScreenBottom()
       dashboardPage.footerFeedback.waitForExist(50000)
       commonLib.clickElement(dashboardPage.footerFeedback)
       browser.pause(3000)
});

When(/^user selects radio button for second question only for footer$/, function () {

  commonLib.waitForElementExistWithoutException(dashboardPage.firstQuestionSecondRadioButton, 5000)
       
        if (dashboardPage.secondQuestionSecondRadioButton.isExisting()) {
            dashboardPage.secondQuestionSecondRadioButton.click()
        }

});

Then(/^user tries to submit the feedback form for footer$/, function () {

   dashboardLib.submitFeedbackNew()

});

Then(/^feedback submission ask for the selection of fields with a validation message for footer$/, function () {

  dashboardPage.selectRadioButtonValidationMsg.waitForExist(10000)
  commonLib.assertValue(true, dashboardPage.selectRadioButtonValidationMsg.isExisting()) 
  dashboardPage.feedbackModalClose.click()

});


//Facebook link verification
When(/^user clicks on Facebook link in Footer$/, function () {

    footerLinkLib.navigateToFooterFacebook()
        
});

// Then(/^user validate Facebook link with page title \"([^\"]*)\"$/, function (expMessage) {

//     commonLib.switchWindowTab()
//     var facebookheaderText = commonLib.getElementText(footerLinkPage.FacebookVisibleText)
//     console.log(facebookheaderText);
//     commonLib.assertElementText(footerLinkPage.FacebookVisibleText, expMessage)
    
    
// });

Then(/^Facebook link is successfully redirecting to Facebook by validating page url$/, function () {

footerLinkLib.validateFacebookPage()

});

// Twitter Link verification
When(/^user clicks on Twitter link in Footer$/, function () {

    footerLinkLib.navigateToFooterTwitter()
        
});

// Then(/^user validate Twitter link with page \"([^\"]*)\"$/, function (expMessage) {

//     commonLib.switchWindowTab()
//     var twitterkheaderText = commonLib.getElementText(footerLinkPage.TwitterVisibleText)
//     console.log(twitterkheaderText);
//     commonLib.assertElementText(footerLinkPage.TwitterVisibleText, expMessage)
    
    
// });

Then(/^Twitter link is successfully redirecting to Twitter by validating page url$/, function () {

    footerLinkLib.validateTwitterPage()

});

// Youtube Link verification
When(/^user clicks on Youtube link in Footer$/, function () {

    footerLinkLib.navigateToFooterYoutube()
        
});

// Then(/^user validate Youtube link with page \"([^\"]*)\"$/, function (expMessage) {

//     commonLib.switchWindowTab()
//     var youtubekheaderText = commonLib.getElementText(footerLinkPage.YoutubeVisibleText)
//     console.log(youtubekheaderText);
//     commonLib.assertElementText(footerLinkPage.YoutubeVisibleText, expMessage)
    
    
// });

Then(/^Youtube link is successfully redirecting to Youtube Page by validating page url$/, function () {

    footerLinkLib.validateYoutubePage()

});

//Blog Validation
When(/^user clicks on blog link in Footer$/, function () {

    footerLinkLib.navigateToFooterBlog()
        
});

Then(/^blog link is successfully redirecting to blog Page by validating page url$/, function () {

    footerLinkLib.validateBlogPage()

});

// Puddle Duck Link verification
When(/^user clicks on PuddleDuck link in Footer$/, function () {

    footerLinkLib.navigateToFooterPuddleDuck()
        
});

// Then(/^user validate PuddleDuck link with page \"([^\"]*)\"$/, function (expMessage) {

//     commonLib.switchWindowTab()
//     var puddleDuckkheaderText = commonLib.getElementText(footerLinkPage.PuddleDuckVisibleText)
//     console.log(puddleDuckkheaderText);
//     commonLib.assertElementText(footerLinkPage.PuddleDuckVisibleText, expMessage)
    
    
// });

Then(/^PuddleDuck link is successfully redirecting to PuddleDuck Page by validating page url$/, function () {

    footerLinkLib.validatePuddleDuckPage()

});



