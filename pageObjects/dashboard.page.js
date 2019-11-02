var json = require('json-file');
var file = json.read('./pageObjects/dashboard.page.json');

class dashboard {

    get rootElement() { return $(file.get('dashboard.selector.root')); }
    get meter() { return $(file.get('dashboard.selector.meter')); }
    get amwaterLogo() { return $(file.get('dashboard.selector.amwaterLogo')); }
    get profileClose() { return $(file.get('dashboard.selector.profileClose')); }
    get accountMeter() { return $(file.get('dashboard.selector.accountMeter')); }
    get loadingSpinner() { return $(file.get('dashboard.selector.loadingSpinner')); }
    get loggedUserDropdownMenu() { return $(file.get('dashboard.selector.loggedUserDropdownMenu')); }
    get loggedUserEditProfileMenuItem() { return $(file.get('dashboard.selector.loggedUserEditProfileMenuItem')); }


    //feedback
    get loggedUserFeedbackMenuItem() { return $(file.get('dashboard.selector.loggedUserFeedbackMenuItem')); }
    get feedbackSubmitButton() { return $(file.get('dashboard.selector.feedbackSubmitButton')); }
    get firstQuestionSecondRadioButton() { return $(file.get('dashboard.selector.firstQuestionSecondRadioButton')); }
    get secondQuestionSecondRadioButton() { return $(file.get('dashboard.selector.secondQuestionSecondRadioButton')); }
    get commentBox() { return $(file.get('dashboard.selector.commentBox')); }
    get selectRadioButtonValidationMsg() { return $(file.get('dashboard.selector.selectRadioButtonValidationMsg')); }
    get feedbackModalClose() { return $(file.get('dashboard.selector.feedbackModalClose')); }

    get feedbackStatus() {return $(file.get('dashboard.selector.feedbackStatus')); }
    get paperlessText() {return $(file.get('dashboard.selector.paperlessText')); }
    get autoPayText() {return $(file.get('dashboard.selector.autoPayText')); }
    get editProfileautopayenrollbutton() {return $(file.get('dashboard.selector.editProfileautopayenrollbutton')); }

    get autoPayCard() {return $(file.get('dashboard.selector.autoPayCard')); }
    get autoPayEnrollmentWindow() {return $(file.get('dashboard.selector.autoPayEnrollmentWindow')); }
    get autopayCheckbox() {return $(file.get('dashboard.selector.autopayCheckbox')); }
    get nextbutton() {return $(file.get('dashboard.selector.nextbutton')); }
    get confirmEnrollmentinformation() {return $(file.get('dashboard.selector.confirmEnrollmentinformation')); }
    get autopaysuccessmsgTitle() {return $(file.get('dashboard.selector.autopaysuccessmsgTitle')); }
    get autopaysuccessmsg() {return $(file.get('dashboard.selector.autopaysuccessmsg')); }
    get xicon() {return $(file.get('dashboard.selector.xicon')); }
    get cancelautopayradiobutton() {return $(file.get('dashboard.selector.cancelautopayradiobutton')); }


    get headerusageMenu() {return $(file.get('dashboard.selector.headerusageMenu')); }
    get conservationTipsSubMenu() {return $(file.get('dashboard.selector.conservationTipsSubMenu')); }
    get conservationTipsText() {return $(file.get('dashboard.selector.conservationTipsText')); }
    get usageOverviewSubMenu() {return $(file.get('dashboard.selector.usageOverviewSubMenu')); }
    get usageOverviewText() {return $(file.get('dashboard.selector.usageOverviewText')); }
    get usageProjectionSubMenu() {return $(file.get('dashboard.selector.usageProjectionSubMenu')); }
    get usageProjectionText() {return $(file.get('dashboard.selector.usageProjectionText')); }
    get highlightOverlay() {return $(file.get('dashboard.selector.highlightOverlay')); }
    get nextArrowCT() {return $(file.get('dashboard.selector.nextArrowCT')); }
    get gallonsAmonthText() {return $(file.get('dashboard.selector.gallonsAmonthText')); }
    get tipTitle() {return $(file.get('dashboard.selector.tipTitle')); }
    get tipSummary() {return $(file.get('dashboard.selector.tipSummary')); }
    get cashpaymentLabel() {return $(file.get('dashboard.selector.cashpaymentLabel')); }
    get headerPaymentMenu() {return $(file.get('dashboard.selector.headerPaymentMenu')); }
    get CashPaymentssSubMenu() {return $(file.get('dashboard.selector.CashPaymentssSubMenu')); }
    get makePaymentssSubMenu() {return $(file.get('dashboard.selector.makePaymentssSubMenu')); }
    get paymentLocationsSubMenu() {return $(file.get('dashboard.selector.paymentLocationsSubMenu')); }
    get nearestLocationText() {return $(file.get('dashboard.selector.nearestLocationText')); }
    get zipCodeTextBoxPL() {return $(file.get('dashboard.selector.zipCodeTextBoxPL')); }
    get autoPayContinueButtonNew() {return $(file.get('dashboard.selector.autoPayContinueButtonNew')); }
    get msgarrowDown() {return $(file.get('dashboard.selector.msgarrowDown')); }
    get alertarrowDown() {return $(file.get('dashboard.selector.alertarrowDown')); }
    get requestarrowDown() {return $(file.get('dashboard.selector.requestarrowDown')); }

    get btnDownload() {return $(file.get('dashboard.selector.btnDownload')); }
    get messageTitle() {return $(file.get('dashboard.selector.messageTitle')); }
    get messageIcon() {return $(file.get('dashboard.selector.messageIcon')); }
    get noAlerts() {return $(file.get('dashboard.selector.noAlerts')); }
    get noOpenRequest() {return $(file.get('dashboard.selector.noOpenRequest')); }
    get alertTitle1() {return $(file.get('dashboard.selector.alertTitle1')); }

    get alertIcon() {return $(file.get('dashboard.selector.alertIcon')); }
    get alertTimestamp1() {return $(file.get('dashboard.selector.alertTimestamp1')); }
    get alertTimestamp2() {return $(file.get('dashboard.selector.alertTimestamp2')); }
    get alertTimestamp3() {return $(file.get('dashboard.selector.alertTimestamp2')); }
    
    //Make Payment modal view
    get autoPayInMakePayment() {return $(file.get('dashboard.selector.autoPayInMakePayment')); }
    get electronicCheckInMakePayment() {return $(file.get('dashboard.selector.electronicCheckInMakePayment')); }
    get debitCreditInMakePayment() {return $(file.get('dashboard.selector.debitCreditInMakePayment')); }
    get cashInMakePayment() {return $(file.get('dashboard.selector.cashInMakePayment')); }
    get makePaymentLabel() {return $(file.get('dashboard.selector.makePaymentLabel')); }
    get makePaymentCloseModalView() {return $(file.get('dashboard.selector.makePaymentCloseModalView')); }


    //conservation tips
    get secondQuestionSecondRadioButton() { return $(file.get('dashboard.selector.secondQuestionSecondRadioButton')); }
    get feedbackStatus() {return $(file.get('dashboard.selector.feedbackStatus')); }



    get loggedUserSignOutMenuItem() { return $(file.get('dashboard.selector.loggedUserSignOutMenuItem')); }
    get servicePeriodLabel() { return $(file.get('dashboard.selector.servicePeriodLabel')); }
    get makePaymentButton() { return $(file.get('dashboard.selector.makePaymentButton')); }
    get autoPayContinueButton() { return $(file.get('dashboard.selector.autoPayContinueButton')); }
    get paymentsDropdownMenu() { return $(file.get('dashboard.selector.paymentsDropdownMenu')); }
    get makePaymentDropdownMenuItem() { return $(file.get('dashboard.selector.makePaymentDropdownMenuItem')); }
    get billingAndPaymentsDropdownMenu() {return $(file.get('dashboard.selector.billingAndPaymentsDropdownMenu')); }
    get makeAPaymentButton() {return $(file.get('dashboard.selector.makeAPaymentButton')); }    
    
    //Paperless Enrollment
    get goPaperlessCard() {return $(file.get('dashboard.selector.goPaperlessCard')); }
    get gopaperlessCardSignupButton() {return $(file.get('dashboard.selector.gopaperlessCardSignupButton')); }
    get paperlessBillingLabel() {return $(file.get('dashboard.selector.paperlessBillingLabel')); }
    get paperlessBillingEnrollmentWindow() {return $(file.get('dashboard.selector.paperlessBillingEnrollmentWindow')); }
    get paperlessThankyouMessage() {return $(file.get('dashboard.selector.paperlessThankyouMessage')); }
    get paperlessUserAck() {return $(file.get('dashboard.selector.paperlessUserAck')); }
    get paperlessUserAckCheckbox() {return $(file.get('dashboard.selector.paperlessUserAckCheckbox')); }
    get paperlessUserSubmitButton() {return $(file.get('dashboard.selector.paperlessUserSubmitButton')); }
    get autopayContinueButton() {return $(file.get('dashboard.selector.autopayContinueButton')); }
    get paperlessEnrollmentStatus() {return $(file.get('dashboard.selector.paperlessEnrollmentStatus')); }
    get modalWindowCloseButton() {return $(file.get('dashboard.selector.modalWindowCloseButton')); }

    //Edit Profile
    get editProfilePaperlessEnrollmentStat() {return $(file.get('dashboard.selector.editProfilePaperlessEnrollmentStat')); }
    get editProfilePaperlessEnrollButton() {return $(file.get('dashboard.selector.editProfilePaperlessEnrollButton')); }

    //Service request card
    get servicesRequestCard() {return $(file.get('dashboard.selector.servicesRequestCard')); }
    get serviceRequestDescription() {return $(file.get('dashboard.selector.serviceRequestDescription')); }
    get serviceRequestNumber() {return $(file.get('dashboard.selector.serviceRequestNumber')); }
    get serviceRequestDetails() {return $$(file.get('dashboard.selector.serviceRequestDetails')); }//Array of element

    //Payment Locations
    get paymentLocationsCard() {return $(file.get('dashboard.selector.paymentLocationsCard')); }
    get paymentLocationSearchButton() {return $(file.get('dashboard.selector.paymentLocationSearchButton')); }

    //Privacy Policy
    get PrivacyPolicylink() { return $(file.get('dashboard.selector.PrivacyPolicylink')); }
    get PrivacyPolicyHeadertag() { return $(file.get('dashboard.selector.PrivacyPolicyHeadertag')); }

    //Terms Of Use
    get TermsOfUse() { return $(file.get('dashboard.selector.termsOfUse')); }

    //footer feedback
    get footerFeedback() { return $(file.get('dashboard.selector.footerFeedback')); }

    //Social Media links
    get FacebookFooterLink() { return $(file.get('dashboard.selector.facebookFooterLink')); }
    get TwitterFooterink() { return $(file.get('dashboard.selector.twitterFooterLink')); }
    get YoutubeFooterink() { return $(file.get('dashboard.selector.youtubeFooterLink')); }
    get BlogFooterink() { return $(file.get('dashboard.selector.blogFooterLink')); }
    get PuddleDuckFooterink() { return $(file.get('dashboard.selector.puddleDuckFooterLink')); }

    //navy footer link
    get LeakDetectionLink() { return $(file.get('dashboard.selector.leakDetectionlink')); }
    get LeakDetectionSpanish() { return $(file.get('dashboard.selector.leakDetectionSpanishlink')); }
    get BillCalculator() { return $(file.get('dashboard.selector.billCalculatorlink')); }
    get SearchForOpenings() { return $(file.get('dashboard.selector.searchForOpeningsLink')); }
    get Accomodation() { return $(file.get('dashboard.selector.accomodationLink')); }
    get AdjustmentFormLink() { return $(file.get('dashboard.selector.formLink')); }
    get ContactusLink() { return $(file.get('dashboard.selector.contactusLink')); }
    get ContactusText() { return $(file.get('dashboard.selector.contactUsText')); }
    get termsOfUse() { return $(file.get('dashboard.selector.termsOfUse')); }
    
    //service alerts
    get serviceAlertsContent() { return $(file.get('dashboard.selector.serviceAlertsContent')); }
    get serviceAlertsContent2() { return $(file.get('dashboard.selector.serviceAlertsContent2')); }
    get serviceAlertsContent3() { return $(file.get('dashboard.selector.serviceAlertsContent3')); }
    get ServiceAlertsViewMore() { return $(file.get('dashboard.selector.serviceAlertsViewMore')); }
    get AlertsPage1() { return $(file.get('dashboard.selector.alertsPage1')); }
    get AlertsText() { return $(file.get('dashboard.selector.latestAlerts')); }

    get LearnMore() { return $(file.get('dashboard.selector.learnMore')); }
    get LearnMore1Text() { return $(file.get('dashboard.selector.learnMore1Text')); }
    get LearnMore2() { return $(file.get('dashboard.selector.learnMore2')); }
    get LearnMore2Text() { return $(file.get('dashboard.selector.learnMore2Text')); }
    get LearnMore3() { return $(file.get('dashboard.selector.learnMore3')); }
    get LearnMore3Text() { return $(file.get('dashboard.selector.learnMore3Text')); }

    //Social media links card
    get cardFacebook() { return $(file.get('dashboard.selector.cardFacebook')); }
    get cardTwitter() { return $(file.get('dashboard.selector.cardTwitter')); }
    get cardYoutube() { return $(file.get('dashboard.selector.cardYoutube')); }
    get cardBlog() { return $(file.get('dashboard.selector.cardBlog')); }
    get cardPuddle() { return $(file.get('dashboard.selector.cardPuddle')); }

  }
  
  module.exports = new dashboard();