var cart = require('../../pageObjects/cart.page.js');

describe("Cart Functionality", function () {
  
  beforeEach(function () {
    browser.url("/");
    browser.debug()

  });

  it('should only let you buy after setting a quantity', function () {
    var isBtnEnabled = cart.buyButton.isEnabled();
    expect(isBtnEnabled, "'buy now' should be disabled to begin").to.be.false;

    // Add quantity
    cart.quantity.setValue(10);

    isBtnEnabled = cart.buyButton.isEnabled();
    expect(isBtnEnabled, "'buy now' is now enabled").to.be.true;
  });

  describe("checkout process", function () {
    beforeEach(function () {
      // Add quantity
      cart.quantity.setValue(10);

      // Click "buy now"
      cart.buyButton.click();
    });

    it('should disable buy now button during processing', function () {
      // Verify "buy now" is disabled
      var isBtnEnabled = cart.buyButton.isEnabled();
      expect(isBtnEnabled, "'buy now' should be disabled after clicking").to.be.false;

      var buyButtonText = cart.buyButton.getText();
      expect(buyButtonText, "Verify 'buy now' text has changed").to.contain("Purchasing");
    });

    it('should show a thank you message with qty and type', function () {
      // waitForExist "thank you message"
      cart.thankYouMsg.waitForExist();

      // verify is has proper quantity and type
      var thankText = cart.thankYouMsg.getText();
      expect(thankText).to.contain("10 T-800 Model 101");
    });

    it('should clear input after completion', function () {
      // waitForValue for quantity input
      cart.quantity.waitForValue(null, true);
    });

    it('should reset button text after purchase completes', function () {
      // wait for button to return back to 'buy now'
      browser.waitUntil(function () {
        return cart.buyButton.getText() !== 'Purchasing...'
      }, 3000);

      // Verify button now says 'buy now'
      var buyButtonText = cart.buyButton.getText();
      expect(buyButtonText).to.equal('Buy Now');
    })

    it('should hide thank you message after clicking close button', function () {
      // waitForExist "thank you message"
      cart.thankYouMsg.waitForExist();

      // Click close button
      $(".close-button").click();

      // use "reverse" flag to wait for it to disappear
      cart.thankYouMsg.waitForVisible(null, true);
    });
  });
});