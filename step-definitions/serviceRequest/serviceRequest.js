const { Then} = require('cucumber')

Then(/^service description visible in the card is \"([^\"]*)\"$/, function (expServiceDescription) {

    dashboardPage.servicesRequestCard.waitForExist(10000)
    commonLib.assertElementText(dashboardPage.serviceRequestDescription, expServiceDescription)

});

Then(/^service request number \"([^\"]*)\" is visible in the card$/, function (expServiceNo) {

    dashboardPage.serviceRequestNumber.waitForExist(10000)
    commonLib.assertElementText(dashboardPage.serviceRequestNumber, expServiceNo)

});

Then(/^customer support hours \"([^\"]*)\" is visible in the card$/, function (expHours) {

    commonLib.assertValue(expHours, dashboardLib.getServiceRequestDetails("Hours"))

});

Then(/^emergency suppport \"([^\"]*)\" is visible in the card$/, function (expEmergencyMsg) {

    commonLib.assertValue(expEmergencyMsg, dashboardLib.getServiceRequestDetails("emergencyInfo"))

});
