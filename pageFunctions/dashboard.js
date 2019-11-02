var json = require('json-file');
var file = json.read('./pageObjects/dashboard.page.json');

class dashboardLib {

    waitUntilDashboardLoads(){
        commonLib.waitForElementExistWithoutException(dashboardPage.meter, 60000)
        if (!dashboardPage.meter.isExisting()) {
            throw "Dashboard did not load within the time limit"
        }

    }

    goToMakePaymentsPage() {

        //commonLib.waitForElementExistWithoutException(dashboardPage.loadingSpinner, 30000)
        dashboardPage.paymentsDropdownMenu.waitForExist(20000)
        dashboardPage.paymentsDropdownMenu.moveToObject();
        browser.pause(2000)
        dashboardPage.makePaymentDropdownMenuItem.click();
        commonLib.waitForElementExistWithoutException(dashboardPage.autoPayContinueButton, 5000)
        if (dashboardPage.autoPayContinueButton.isExisting()) {
            dashboardPage.autoPayContinueButton.click()
        }
        makePaymentPage.electronicCheck.waitForExist(20000)

    }

    goToBillingAndPaymentsPage() {

        dashboardPage.paymentsDropdownMenu.waitForExist(20000)
        dashboardPage.paymentsDropdownMenu.moveToObject();
        browser.pause(2000)
        dashboardPage.billingAndPaymentsDropdownMenu.click();
        billAndPaymentsPage.sliderBar.waitForExist(20000)

    }

    logoutAmwater(){

        commonLib.scrolToScreenTop()
        dashboardPage.loggedUserDropdownMenu.click()
        dashboardPage.loggedUserSignOutMenuItem.waitForExist(10000)
        browser.pause(3000)
        dashboardPage.loggedUserSignOutMenuItem.click()
        loginPage.loginTextbox.waitForExist(60000)

    }

    closePaperlessEnrollmentWindow(){

        dashboardPage.modalWindowCloseButton.waitForExist(10000)
        dashboardPage.modalWindowCloseButton.getLocationInView()
        commonLib.clickButtonByQuerySelector(file.get('dashboard.selector.modalWindowCloseButton'))
        dashboardPage.modalWindowCloseButton.waitForExist(10000, true)
    }

    unsubscribeFromPaperlessBilling(){

        //commonLib.waitForElementExistWithoutException(dashboardPage.loadingSpinner, 30000)
        this.navigateToEditUserProfilePage()
        this.gotoEditProfilePaperlessEnrollmentSection()

        if (dashboardPage.editProfilePaperlessEnrollButton.getText() === "Unenroll") {
            
            console.log("Paperless enrollment is active. Attempting to deactivate")
            dashboardPage.editProfilePaperlessEnrollButton.click()
            
            this.submitPaperlessEnrollmentAck()
            this.closePaperlessEnrollmentWindow()
            console.log("Paperless enrollment deactivation successfull") 
        }

        browser.back()
        commonLib.scrolToScreenTop()

    }

    navigateToEditUserProfilePage(){

        commonLib.scrolToScreenTop()
        dashboardPage.loggedUserDropdownMenu.waitForExist(10000)
        dashboardPage.loggedUserDropdownMenu.click()
        dashboardPage.loggedUserEditProfileMenuItem.waitForExist(10000)
        browser.pause(3000)

        dashboardPage.loggedUserEditProfileMenuItem.click()

        browser.waitUntil(function () {
            return browser.getUrl().indexOf('profile') > -1
          }, 5000, 'Expected to be navigated to Edit Profile page');

    }

    navigateToFeedbackModalView(){

        commonLib.scrolToScreenTop()
        dashboardPage.loggedUserDropdownMenu.waitForExist(10000)
        dashboardPage.loggedUserDropdownMenu.click()
        dashboardPage.loggedUserFeedbackMenuItem.waitForExist(10000)
        browser.pause(3000)

        dashboardPage.loggedUserFeedbackMenuItem.click()
    }



    navigateToUsageHeaderMenu(){

        commonLib.scrolToScreenTop()
       
        browser.pause(3000)
        //dashboardPage.headerusageMenu.waitForExist(10000)
        console.log("before hover")
        var usageMenu = dashboardPage.headerusageMenu
        console.log(usageMenu)
        browser.moveTo(usageMenu,0,10)
        //dashboardPage.headerusageMenu.click()
        console.log("hover header usage")
        dashboardPage.headerusageMenu.click()
        browser.pause(3000)

        // browser.moveTo(downloadButton,0,1100);
        // downloadButton.click()
        // browser.pause(2000)
       // dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        //browser.pause(3000)

        //dashboardPage.loggedUserFeedbackMenuItem.click()
    }


    navigateToConservationTips(){

        var conservationTipsSMenu = dashboardPage.conservationTipsSubMenu
        console.log(conservationTipsSMenu)
        browser.moveTo(conservationTipsSMenu,0,60)
        //dashboardPage.headerusageMenu.click()
        console.log("conservation tips menu found")
        dashboardPage.conservationTipsSubMenu.waitForExist(2000)
        dashboardPage.conservationTipsSubMenu.click()
        console.log("conservation tips sub menu click")
        //dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        browser.pause(5000)

        //dashboardPage.loggedUserFeedbackMenuItem.click()
    }

      navigateToUsageOverviewFromUsageMenu(){

        var usageOverviewSubMenu = dashboardPage.usageOverviewSubMenu
        console.log(usageOverviewSubMenu)
        browser.moveTo(usageOverviewSubMenu,0,30)
        //dashboardPage.headerusageMenu.click()
        console.log("usageOverviewSubMenu menu found")
        dashboardPage.usageOverviewSubMenu.click()
        console.log("usageOverviewSubMenu sub menu click")
        //dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        browser.pause(5000)

        //dashboardPage.loggedUserFeedbackMenuItem.click()
    }

      navigateToUsageProjectionFromUsageMenu(){

        var usageProjectionSubMenu = dashboardPage.usageProjectionSubMenu
        console.log(usageProjectionSubMenu)
        browser.moveTo(usageProjectionSubMenu,0,40)
        //dashboardPage.headerusageMenu.click()
        console.log("usageProjectionSubMenu menu found")
        dashboardPage.usageProjectionSubMenu.click()
        console.log("usageProjectionSubMenu click")
        //dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        browser.pause(5000)

        //dashboardPage.loggedUserFeedbackMenuItem.click()
    }


   navigateToCashPayment(){

        var CashPaymentssSubMenu = dashboardPage.CashPaymentssSubMenu
        console.log(CashPaymentssSubMenu)
        browser.moveTo(CashPaymentssSubMenu,0,60)
        //dashboardPage.headerusageMenu.click()
        console.log("cash payment menu found")
        dashboardPage.CashPaymentssSubMenu.click()
        console.log("cash payment menu click")
        //dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        browser.pause(5000)

        //dashboardPage.loggedUserFeedbackMenuItem.click()
    }

    navigateToMakePayment(){

        var makePaymentssSubMenu = dashboardPage.makePaymentssSubMenu
        console.log(makePaymentssSubMenu)
        browser.moveTo(makePaymentssSubMenu,0,18)
        //dashboardPage.headerusageMenu.click()
        console.log("cash payment menu found")
        dashboardPage.makePaymentssSubMenu.click()
        console.log("cash payment menu click")
        //dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        browser.pause(3000)
    }

    navigateToPaymentlLocation(){

        var paymentLocationsSubMenu = dashboardPage.paymentLocationsSubMenu
        console.log(paymentLocationsSubMenu)
        browser.moveTo(paymentLocationsSubMenu,0,50)
        //dashboardPage.headerusageMenu.click()
        console.log("paymentLocationsSubMenu found")
        dashboardPage.paymentLocationsSubMenu.click()
        console.log("paymentLocationsSubMenu click")
        //dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        browser.pause(3000)

    }


    navigateToNextConservationTips(){


        console.log("under next conservation tips")
        dashboardPage.nextArrowCT.click()
        console.log("nextTip Clicked")
        //dashboardPage.conservationTipsSubMenu.waitForExist(10000)
        browser.pause(2000)

        //dashboardPage.loggedUserFeedbackMenuItem.click()
    }

    navigateToPaymentsHeaderMenu(){
        commonLib.scrolToScreenTop()
       
        browser.pause(3000)
        //dashboardPage.headerusageMenu.waitForExist(10000)
        console.log("before hover")
        var headerPaymentMenu = dashboardPage.headerPaymentMenu
        console.log(headerPaymentMenu)
        browser.moveTo(headerPaymentMenu,0,5)
        //dashboardPage.headerusageMenu.click()
        console.log("hover header payment")
        dashboardPage.headerPaymentMenu.click()
        browser.pause(3000)
    }



    submitFeedback(){

        commonLib.waitForElementExistWithoutException(dashboardPage.firstQuestionSecondRadioButton, 5000)
        if (dashboardPage.firstQuestionSecondRadioButton.isExisting()) {
            dashboardPage.firstQuestionSecondRadioButton.click()
        }
        if (dashboardPage.secondQuestionSecondRadioButton.isExisting()) {
            dashboardPage.secondQuestionSecondRadioButton.click()
        }
    //dashboardPage.feedbackSubmitButton.click()
    }

    submitFeedbackNew(){
        dashboardPage.feedbackSubmitButton.click()
        browser.pause(5000)
    }



       navigateToDashboardAfterPaperlessUnsubscription(){
        
        browser.pause(3000)
         
        if (dashboardPage.editProfilePaperlessEnrollButton.getText() == "Unenroll") {
            
            console.log("Paperless enrollment is active. Attempting to deactivate")
            dashboardPage.editProfilePaperlessEnrollButton.click()
            
            this.submitPaperlessEnrollmentAck()
            this.closePaperlessEnrollmentWindow()
            console.log("Paperless enrollment deactivation successfull") 
            browser.pause(2000)
            dashboardPage.amwaterLogo.click()
            //commonLib.scrolToScreenTop()
            browser.pause(2000)
        }
        else{
            commonLib.scrolToScreenTop()
            dashboardPage.profileClose.click()
            //dashboardPage.amwaterLogo.click()
            console.log("under else")
           // commonLib.scrolToScreenTop()
            browser.pause(5000)

        }

       // browser.back()
       /// commonLib.scrolToScreenTop()

    }

   
    navigateToDashboardAfterAutoPayUnEnroll(){
        
        //commonLib.waitForElementExistWithoutException(dashboardPage.loadingSpinner, 30000)
        //dashboardLib.navigateToEditUserProfilePage()

        dashboardPage.editProfileautopayenrollbutton.waitForExist(10000)
        commonLib.scrollToScreenBottom()

        console.log("Status of AutoPay enrollment: " + dashboardPage.editProfileautopayenrollbutton.getText())

        if (dashboardPage.editProfileautopayenrollbutton.getText() === "Change") {
            
            console.log("AutoPay enrollment is active. Attempting to deactivate")
            dashboardPage.editProfileautopayenrollbutton.click()
            dashboardPage.cancelautopayradiobutton.waitForExist(10000)
            console.log("##########################e")
            this.cancelautoPayenrollment()
            this.closeAutoPaySuccessWindow()
            console.log("AutoPay enrollment cancelled successfully!") 
        }
         console.log("User is not enrolled for AutoPay")
        browser.back()
        commonLib.scrolToScreenTop()
        browser.pause(3000)

    }


    cancelautoPayenrollment(){

        dashboardPage.cancelautopayradiobutton.waitForExist(10000)
        commonLib.clickButtonByQuerySelector(file.get('dashboard.selector.cancelautopayradiobutton'))
        dashboardPage.nextbutton.getLocationInView()
        dashboardPage.nextbutton.click()
        dashboardPage.autopayCheckbox.click()
        browser.waitForExist(".ant-checkbox.ant-checkbox-checked",5000)
        dashboardPage.nextbutton.getLocationInView()
        dashboardPage.nextbutton.click()
        
    }

    closeAutoPaySuccessWindow(){

        dashboardPage.xicon.waitForExist(5000)
        dashboardPage.xicon.getLocationInView()
        commonLib.clickButtonByQuerySelector(file.get('dashboard.selector.xicon'))
        dashboardPage.xicon.waitForExist(5000, true)
    }

    gotoEditProfilePaperlessEnrollmentSection(){

        dashboardPage.editProfileautopayenrollbutton.waitForExist(10000)
        commonLib.scrollToScreenBottom()

        console.log("Status of AutoPay enrollment: " + dashboardPage.editProfileautopayenrollbutton.getText())

    }

       gotoEditProfileAutoPayEnrollmentSection(){

        dashboardPage.editProfilePaperlessEnrollButton.waitForExist(10000)
        commonLib.scrollToScreenBottom()

        console.log("Status of Paperless enrollment: " + dashboardPage.editProfilePaperlessEnrollButton.getText())

    }
    

    submitPaperlessEnrollmentAck(){

        dashboardPage.paperlessUserAckCheckbox.waitForExist(10000)
        commonLib.clickButtonByQuerySelector(file.get('dashboard.selector.paperlessUserAckCheckbox'))
        dashboardPage.paperlessUserSubmitButton.getLocationInView()
        commonLib.clickButtonByQuerySelector(file.get('dashboard.selector.paperlessUserSubmitButton'))
        dashboardPage.paperlessUserSubmitButton.waitForExist(10000, true)

    }

    subscribeToPaperlessBilling(){
        
        //commonLib.waitForElementExistWithoutException(dashboardPage.loadingSpinner, 30000)
        this.navigateToEditUserProfilePage()

        dashboardPage.editProfilePaperlessEnrollButton.waitForExist(10000)
        commonLib.scrollToScreenBottom()

        console.log("Status of Paperless enrollment: " + dashboardPage.editProfilePaperlessEnrollButton.getText())

        if (dashboardPage.editProfilePaperlessEnrollButton.getText() === "Enroll") {
            
            console.log("Paperless enrollment is active. Attempting to deactivate")
            dashboardPage.editProfilePaperlessEnrollButton.click()
            dashboardPage.paperlessUserAckCheckbox.waitForExist(10000)
            this.submitPaperlessEnrollmentAck()
            this.closePaperlessEnrollmentWindow()
            console.log("Paperless enrollment deactivation successfull") 
            browser.back()
            commonLib.scrolToScreenTop()
        }

        browser.back()
        commonLib.scrolToScreenTop()

    }

        scrollPage(){

        browser.execute(function(){
            var root = document.querySelector("#root")
            root.scrollTo(0, 200)

        })

    }
    //Service request card functions

    getServiceRequestDetails(field){

        let detailsList = null;
        let result = null;
        
        browser.waitUntil(function(){
            detailsList = dashboardPage.serviceRequestDetails

            return detailsList.length>0;
        })

        console.log("Service Request labels available : "+detailsList.length);
        switch (field) {
            case "Hours":

                result = detailsList[0].getText() + " " + detailsList[1].getText()
                break;

            case "emergencyInfo":

                result = detailsList[2].getText() + " " + detailsList[3].getText()
                break;
        
            default:

                throw "Invalid option"
                break;
        }

        return result;

    }

}

module.exports = new dashboardLib()