const { Given, When, Then} = require('cucumber')

  //Scenario: User can make payment by cash
  //Scenario: User can make payment by Electronic Check
  //Scenario: User can make payment by Debit or Credit card

  Given(/^user navigates to Make Payments page an selects payment method \"([^\"]*)\"$/, function (paymentMethod) {
    
    dashboardLib.goToMakePaymentsPage()
    makePaymentLib.selectPaymentMethod(paymentMethod)

  })

  When(/^user pays with amount \"([^\"]*)\" and enters receipt number to submit$/, function (amount) {
    makePaymentLib.payByCash(amount)
    });

  
  
  Then(/^cash payment is successful with message \"([^\"]*)\"$/, function (expMessage) {
    commonLib.assertElementText(makePaymentPage.cPostPaymentMessage, expMessage)
    makePaymentLib.closeMakePaymentWindow()
  });
  

  //Scenario: User can make payment by Electronic Check
  //Scenario: User can make payment by Debit or Credit card
  initialBal = null;
  payAmount = null;

  When(/^user sucessfully pays \"([^\"]*)\"$/, function (amount) {
      payAmount = commonLib.parseIntergerFromString(amount)

      amtText = makePaymentLib.getMakePaymentAmountDue()
      initialBal = commonLib.parseIntergerFromString(amtText)

      makePaymentLib.payByCheckOrCard(payAmount)
  });

  Then(/^user recieves payment successful message \"([^\"]*)\"$/, function (expMessage) {
      commonLib.assertElementText(makePaymentPage.ecPostPaymentMessage, expMessage)
  
  });

  Then(/^user Account Summary is updated with the deficit amount after 10 seconds$/, function () {

      browser.pause(10000)
      browser.frameParent()
      finalBal = commonLib.parseIntergerFromString(makePaymentLib.getMakePaymentAmountDue())
      var deductedValue = commonLib.parseIntergerFromString(initialBal - payAmount)
      commonLib.assertValue(finalBal, deductedValue)
      makePaymentLib.closeMakePaymentWindow()
  });
