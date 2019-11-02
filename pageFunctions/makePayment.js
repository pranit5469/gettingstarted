var json = require('json-file');
var file = json.read('./pageObjects/makePayment.page.json');

var jsonFilter = require('jsonpath');
var testData = json.read('./utilities/testData.json');

class MakePayment {

    payByCheckOrCard(amount) {
        
        var amtInt = commonLib.parseIntergerFromString(amount)
        
        makePaymentPage.paymentFrame.waitForExist(20000)
        //Switch to Frame - 0 (only frame in the page)
        browser.frame(0)
        //browser.frame('paymentusURLIframe')//Not working in Firefox only
        makePaymentPage.amountTextbox.waitForExist(20000)
        makePaymentPage.amountTextbox.setValue(amtInt)

        this.selectPaymentCard(0)
        browser.pause(2000)
        makePaymentPage.payContinueButton.getLocationInView()
        makePaymentPage.payContinueButton.waitForVisible(10000)
        
        commonLib.clickButtonByQuerySelector(file.get('makePayment.selector.payContinueButton'))
        
        //Handle duplicate payment alert if appears
        this.handleDuplicatePaymentDialog(makePaymentPage.duplicatePayContinueButton)
        makePaymentPage.agreeTermsAndConsditionsCheckbox.waitForExist(10000)
        makePaymentPage.agreeTermsAndConsditionsCheckbox.click()

        //Work around for Firefox
        commonLib.clickButtonByQuerySelector(file.get('makePayment.selector.payAmountButton'))

        makePaymentPage.ecPostPayMessageBody.waitForExist(20000)
        makePaymentPage.ecPostPaymentMessage.waitForExist(20000)
    };

    payByCash(amount) {

        makePaymentPage.paymentAmountTextbox.waitForExist(10000)
        makePaymentPage.paymentAmountTextbox.getLocationInView()
        makePaymentPage.paymentAmountTextbox.setValue(amount)
        makePaymentPage.recieptNumberTextbox.setValue(this.getCashReceiptNumber())
        makePaymentPage.cashSubmitButton.getLocationInView()
        commonLib.clickButtonByQuerySelector(file.get('makePayment.selector.cashSubmitButton'))
        //makePaymentPage.cashSubmitButton.click()
        makePaymentPage.cPostPaymentMessage.waitForExist(20000)
        console.log("Paid amount: " + amount)
                            
    }

    handleDuplicatePaymentDialog(element) {

        commonLib.waitForElementVisibleWithoutException(element, 10000)
        if (element.isVisible()) {
            element.click()
            console.log('Handled duplicate payment dialog')
        }

    }

    closeMakePaymentWindow() {

        makePaymentPage.makePaymentCloseButton.waitForVisible(10000);
        commonLib.clickButtonByQuerySelector(file.get('makePayment.selector.makePaymentCloseButton'))
        makePaymentPage.makePaymentCloseButton.waitForExist(5000, true)
        console.log('Closed Make Payment window')
        
    };

    selectPaymentMethod(paymentMethod){

        switch (paymentMethod) {
            case "Electronic Check":
                makePaymentPage.electronicCheck.click()
                break;
            
            case "Credit or Debit Card":
                makePaymentPage.cardPaymentMode.click()
                break;

            case "Cash":
                makePaymentPage.cashPaymentMode.click()
                break;

            case "AutoPay Enrollment":
                //To be implemented
                break;
        
            default:
                //To be implemented
                throw "Invalid paymentMethod: " + paymentMethod;
                
        }

    }

    parseIntergerFromString(stringValue){

        var regex = /-?\d*\.{0,1}\d+/g;
        var regexArray = regex.exec(stringValue);

        return parseFloat(regexArray[0])

    }

    getMakePaymentAmountDue(){
        return commonLib.getElementText(makePaymentPage.amtDueText)
    }

    selectPaymentCard(cardpos){

        let paymentCardsList = makePaymentPage.paymentCards
        console.log("Number of payment cards found: " + paymentCardsList.length)
        for (let cardIndex = 0; cardIndex < paymentCardsList.length; cardIndex++) {
            if (cardIndex == cardpos) {
                paymentCardsList[cardIndex].click()
                
            }
            
        }

    }

    getCashReceiptNumber(){

        let initialNumber = 0;
        let julianDay = commonLib.getJulianDate();
        let amt = makePaymentPage.paymentAmountTextbox.getValue();
        let receiptConst = jsonFilter.query(testData, "$..[?(@.loginID=='" + global.loginId + "')].cashRecieptConstant");

        let receiptNo = initialNumber + julianDay + amt + receiptConst[0]
        console.log("###################################Generated cash receipt no: " + receiptNo)
        return receiptNo

    }

}

module.exports = new MakePayment()