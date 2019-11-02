const { Given, When, Then } = require('cucumber')

//Leak Detection 1 link verification
When(/^user clicks on Leak Detection Information link in Footer$/, function () {

    navyFooterLinksLib.navigateToLeakDetection()
    
});

// Then(/^user validate Leak Detection Information with page title \"([^\"]*)\"$/, function (expMessage) {

//     commonLib.switchWindowTab()
//     //console.log(Beforeleak1);
//     // commonLib.scrollToScreenBottom()
//     // commonLib.scrolToScreenTop()
//     // var pageTitle =  browser.getTitle();
//     // console.log(pageTitle);
//     console.log(browser.getTitle());

    
//     var leak1 = browser.moveTo(navyFooterLinkPage.LeakDetectionText,0,10);
//     console.log(leak1);
//     var leakDetectionText = commonLib.getElementText(navyFooterLinkPage.LeakDetectionText)
//     console.log(leakDetectionText);
//     commonLib.assertElementText(navyFooterLinkPage.LeakDetectionText, expMessage)

//     browser.getTitle(function(err, title){
//     assert(!err);
//     assert(title === 'Some Title');
// })
        
// });


Then(/^validate Leak Detection Information link is successfully redirecting to Leak Detection Information page by verifying url$/, function () {
    
    navyFooterLinksLib.validateLeakDetectionPage()
    
}); 

//Spanish Leak Detection
When(/^user click on Leak Detection Information Spanish link in Footer$/, function () {
    
    navyFooterLinksLib.navigateToLeakDetectionSpanish()
    
}); 

Then(/^validate Leak Detection Information Spanish link is successfully redirecting to Leak Detection Information page by verifying url$/, function () {
    
    navyFooterLinksLib.validateLeakDetectionSpanishPage()
    
}); 

//Bill Calculator
When(/^user click on bill calculator link in Navy Footer$/, function () {
    
    navyFooterLinksLib.navigateToBillCalculator()
    
}); 

Then(/^user validate Bill calculator page with page title \"([^\"]*)\"$/, function (expMessage) {
    
    commonLib.switchWindowTab()
    var billCalculatorheaderText = commonLib.getElementText(navyFooterLinksPage.BillCalculatorText)
    console.log(billCalculatorheaderText);
    commonLib.assertElementText(navyFooterLinksPage.BillCalculatorText, expMessage)
    
});

Then(/^validate Bill Calculator link is successfully redirecting to Bill Calculator page by verifying url$/, function () {
    
    navyFooterLinksLib.validateBillCalculator()
    
}); 

//Search for openings validation

When(/^user click on Search for openings link$/, function () {
    
    navyFooterLinksLib.navigateToSearchForOpenings()
    
}); 

Then(/^validate the career opening page with text \"([^\"]*)\"$/, function (expMessage) {
    
    commonLib.clickElement(navyFooterLinksPage.okButtonPopup)
    commonLib.switchWindowTab()
    var careerPageText = commonLib.getElementText(navyFooterLinksPage.CareerPageText)
    console.log(careerPageText);
    commonLib.assertElementText(navyFooterLinksPage.CareerPageText, expMessage)
    
});

Then(/^validate Career opening page by verifying url$/, function () {
    
    navyFooterLinksLib.validateCareerOpenings()
    
}); 

//Search for Accomodation
When(/^user click on view Accomadation Policy$/, function () {
    
    navyFooterLinksLib.navigateToAccomodation()
    
}); 

Then(/^user validate accomodation page with text \"([^\"]*)\"$/, function (expMessage) {
    
    commonLib.switchWindowTab()
    var accomodationPageText = commonLib.getElementText(navyFooterLinksPage.AccomodationText)
    console.log(accomodationPageText);
    commonLib.assertElementText(navyFooterLinksPage.AccomodationText, expMessage)
    
});

Then(/^verify accomodation page by validating url$/, function () {
    
    navyFooterLinksLib.validateAccomodation()
    
}); 

//Adjustment form Link

Then(/^user click on Adjustment Request form$/, function () {
    
    navyFooterLinksLib.AdjustmentFormClick()
    
});





