var json = require('json-file');
var file = json.read('./pageObjects/makePayment.page.json');

class makePayment {

    get amtDueText() { return $(file.get('makePayment.selector.amtDueText')); }
    get electronicCheck() { return $(file.get('makePayment.selector.electronicCheck')); }
    get paymentFrame() { return $(file.get('makePayment.selector.paymentFrame')); }
    get amountTextbox() { return $(file.get('makePayment.selector.amountTextbox')); }
    get payContinueButton() { return $(file.get('makePayment.selector.payContinueButton')); }
    get duplicatePayContinueButton() { return $(file.get('makePayment.selector.duplicatePayContinueButton')); }
    get agreeTermsAndConsditionsCheckbox() { return $(file.get('makePayment.selector.agreeTermsAndConsditionsCheckbox')); }
    get payAmountButton() { return $(file.get('makePayment.selector.payAmountButton')); }
    get ecPostPayMessageBody() { return $(file.get('makePayment.selector.ecPostPayMessageBody')); }
    get ecPostPaymentMessage() { return $(file.get('makePayment.selector.ecPostPaymentMessage')); }
    get cardPaymentMode() { return $(file.get('makePayment.selector.cardPaymentMode')); }
    get paymentCards() { return $$(file.get('makePayment.selector.paymentCards')); }
    get cashPaymentMode() { return $(file.get('makePayment.selector.cashPaymentMode')); }
    get paymentAmountTextbox() { return $(file.get('makePayment.selector.paymentAmountTextbox')); }
    get recieptNumberTextbox() { return $(file.get('makePayment.selector.recieptNumberTextbox')); }
    get cPostPaymentMessage() { return $(file.get('makePayment.selector.cPostPaymentMessage')); }
    get cashSubmitButton() { return $(file.get('makePayment.selector.cashSubmitButton')); }
    get makePaymentCloseButton() { return $(file.get('makePayment.selector.makePaymentCloseButton')); }

  }
  
  module.exports = new makePayment();