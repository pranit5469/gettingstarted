var json = require('json-file');
var file = json.read('./pageObjects/autoPay.page.json');

class autoPaypage {

    //Dashboard level selectors for AutoPay
    get autopayContinueButton() {return $(file.get('autopay.selector.autopayContinueButton')); }
    get autoPayCard() {return $(file.get('autopay.selector.autoPayCard')); }
   
    //AutoPay Pop Up Selectors
    get autoPayEnrollmentWindow() {return $(file.get('autopay.selector.autoPayEnrollmentWindow')); }
    get routingNumber() {return $(file.get('autopay.selector.routingNumber')); }
    get bankAcctNumber() {return $(file.get('autopay.selector.bankAcctNumber')); }
    get confirmbankAcctNumber() {return $(file.get('autopay.selector.confirmbankAcctNumber')); }
    get autopayCheckbox() {return $(file.get('autopay.selector.autopayCheckbox')); }
    get nextbutton() {return $(file.get('autopay.selector.nextbutton')); }
    get autoPayconfirmEnrollmentinformationEnrollmentWindow() {return $(file.get('autopay.selector.confirmEnrollmentinformation')); }
    get autopaysuccessmsgTitle() {return $(file.get('autopay.selector.autopaysuccessmsgTitle')); }
    get autopaysuccessmsg() {return $(file.get('autopay.selector.autopaysuccessmsg')); }
    get xicon() {return $(file.get('autopay.selector.xicon')); }

    //Edit Profile page related elements for AutoPay

    get editProfileautopayenrollbutton() {return $(file.get('autopay.selector.editProfileautopayenrollbutton')); }

    //Cancel AutoPay related elements
    get cancelautopayradiobutton() {return $(file.get('autopay.selector.cancelautopayradiobutton')); }

  }
  
  module.exports = new autoPaypage();