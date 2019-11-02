

class PaymentLocations {

    navigateToPaymentLocationsPage(){

        //commonLib.waitForElementExistWithoutException(dashboardPage.loadingSpinner, 30000)
        commonLib.clickElement(dashboardPage.paymentLocationSearchButton)
        paymentLocationsPage.cashPaymentLocationView.waitForExist(10000)

    }

    isShowMoreLinkEnabled(){

        let value = paymentLocationsPage.showMoreLink.getAttribute('class')
        return value.includes('enable')

    }

    waitUntilShowLinkIsEnabled(){

        browser.waitUntil(function () {
            browser.pause(500)
            let value = paymentLocationsPage.showMoreLink.getAttribute('class')
            return value.includes('enable')
        }, 20000, 'expected text to be enabled after 20s'); 

        

    }

    getNumberOfSearchLocationsDisplayed(){

        paymentLocationsPage.locationContainer.waitForExist(30000);
        return paymentLocationsPage.searchLocationResults.length.toString();

    }

    verifyAddressContainsState(list, state){

        let containsState = false
        let addressList = list.$$('.//p'); 
        
        console.log("-----------------------------------------")
        for (var index = 0; index < addressList.length; index++) {
            addressList[index].getLocationInView()
            console.log(addressList[index].getText())

            if (addressList[index].getText().includes(state)) {
                containsState = true
                break;
            }
            
        }
        console.log("-----------------------------------------")

        return containsState

    }

    verifyAddressContainsStateForAllResults(state){

        paymentLocationsPage.locationContainer.waitForExist(10000);
        let containsState = true
        let locationList

        browser.waitUntil(function () {
            browser.pause(1000)
            locationList = paymentLocationsPage.searchLocationResults
            return locationList.length > 0
        }, 20000, 'Expected to have search results after 20s'); 

        
        let length = locationList.length
        console.log("Total number of locations found: " + length)

        if (length === 0) {
           throw "Locations were not loaded" 
        }

        for (var locIndex = 0; locIndex < length; locIndex++) {

            console.log("Verifying address of each location")
            let flag = this.verifyAddressContainsState(locationList[locIndex], state)

            if (!flag) {
                containsState = false
                break
            }
        }

        return containsState;

    }

    isAllCurrenciesDisplayedInDollarFormat(){

        let locationList = paymentLocationsPage.searchLocationResults
        let status = true
        
        for (var location of locationList) {

            location.getLocationInView()
            let fee = location.$(".//span[contains(text(),'Fee')]/following-sibling::span[1]").getText()

            console.log("Fee dispayed for address: " + fee)

            if (!commonLib.isTextInDollarFormat(fee)) {
                status = false;
                break
            }
                        
        }

        return status;

    }

    isAllNumbersDispalyedInNANPOrNAFormat(){

        let locationList = paymentLocationsPage.searchLocationResults
        let isNANP = true

        for (var location of locationList) {
            location.getLocationInView()
            let phoneNumber = location.$(".//span[contains(text(),'Phone')]/following-sibling::span[1]").getText()

            console.log("Phone number dispayed for address: " + phoneNumber)

            if (!(commonLib.isPhoneNumberNANP(phoneNumber) || phoneNumber === "Not Available")) {
                isNANP = false
                break
            }
                        
        }

        return isNANP
    }

   

}

module.exports = new PaymentLocations();