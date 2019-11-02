var json = require('json-file');
var billAndPaymentsJson = json.read('./pageObjects/billingAndPayments.page.json');
class BillingAndPayments {
    
    /**
     * Move Slider Handle End to a desired month. The desired month is 1 months later from the
     * default month selected.
     * 
     */
    setSliderHandleStartFromDefaultToLaterMonth(){
        
        console.log(this.getLastMonthElement().selector)
        this.setSliderHandle(billAndPaymentsPage.sliderHandleStart.selector, this.getLastMonthElement().selector)
    }

    /**
     * Drag and drop the desired slider handle(sliderHandleStart or sliderHandleEnd) on displayed 
     * month marker in slider bar
     * @param {String} sliderHandleLocator 
     * @param {String} monthLocator
     * @returns {String}
     * @example setSliderHandle(sliderHandleStartLocator, monthLocator)
     */
    setSliderHandle(sliderHandleLocator, monthLocator){
        browser.dragAndDrop(sliderHandleLocator, monthLocator);
    }

    /**
     * returns a the last month element based on the current month as reference
     * @param {String} defaultMonthInSliderBar
     * @returns {String}
     */
    getLastMonthElement(){
        let lastMonth = commonLib.getLastMonth("short")
        let lastMonthYear = commonLib.getLastMonthYear()
        let selector = `//span[span[@class='tooltiptext' and text()='${lastMonth} ${lastMonthYear}']]`
        return $(selector)
    }
    /**
     * Verify if the dates populated under column "Date" of Billing and Payments table are with 
     * in the range of the selected statement period.
     * @returns {boolean}
     */
    areDatesDisplayedInBillingAndPaymentsTableWithinRange(){

        let rowIndex = 0;
        let columnIndex = this.getBillingAndPaymentsColumnIndex("DATE")
        let isWithInRange = null
        
        billAndPaymentsPage.nextPageLink.getLocationInView()

        do {
            
            if (this.isNextPageLinkEnabled() && rowIndex > 0 ) {
                billAndPaymentsPage.nextPageLink.click()
                billAndPaymentsPage.billingAndPaymentsTableBody.waitForVisible()
            }

            let rows = billAndPaymentsPage.billingAndPaymentsTableBody.$$(`tr`)
            for (let [index, row] of rows.entries()) {
                rowIndex++

                row.getLocationInView()
                let dateValue =  row.$(`td:nth-of-type(${columnIndex})`).getText()
                
                let startDate = commonLib.getLastMonthFirstDay()
                let endDate = new Date()
                let actualDate = new Date(dateValue)
                isWithInRange = (actualDate >= startDate && actualDate <= endDate)
                console.log('----------------------------------')
                console.log(`Row: ${rowIndex}\nStart date: ${startDate}\nEnd date: ${endDate}\nActual date: ${actualDate}\nIs in range: ${isWithInRange}`)
                
                if (!isWithInRange) {
                    break
                }
            }
            
            billAndPaymentsPage.nextPageLink.getLocationInView()
            
        } while (this.isNextPageLinkEnabled());

        console.log(`Verified ${rowIndex} rows in Billing and Payments table`)
        return isWithInRange

    }

    /**
     * Check in Next Page link is enabled
     * @returns {boolean}
     */
    isNextPageLinkEnabled(){
        return billAndPaymentsPage.nextPageLink.getAttribute('aria-disabled') === "false"
    }

    /**
     * return the index/location if a column in Billing and Payments table from left to right
     * Note: 1 based index
     * @param {string} columnHeader
     * @returns {integer}
     * @example getBillingAndPaymentsColumnIndex("TRANSACTION TYPE")
     */
    getBillingAndPaymentsColumnIndex(columnHeader){
        let columnHeaders = billAndPaymentsPage.billingAndPaymentsTableHeader.$$("thead th")

        for (let [index, object] of columnHeaders.entries()) {
            if (object.getText() === columnHeader) {
                console.log(`Column ${columnHeader} is found at position ${index + 1}`)
                return index + 1
            }
        }
        throw new Error(`Column ${columnHeader} was not found in Billing And Payments Table`)
    }

    clickOnServiceLinkImpotantInformation(){
        let rowIndex = 0;
        let columnIndex = this.getBillingAndPaymentsColumnIndex("IMPORTANT INFORMATION")
        
        billAndPaymentsPage.nextPageLink.getLocationInView()

        do {
            
            if (this.isNextPageLinkEnabled() && rowIndex > 0 ) {
                billAndPaymentsPage.nextPageLink.click()
                billAndPaymentsPage.billingAndPaymentsTableBody.waitForVisible()
            }

            let rows = billAndPaymentsPage.billingAndPaymentsTableBody.$$(`tr`)
            for (let [index, row] of rows.entries()) {
                rowIndex++
                row.getLocationInView()
                let impInformationCell =  row.$(`td:nth-of-type(${columnIndex})`)
                let serviceLinkCount = impInformationCell.$$('a').length

                if (serviceLinkCount > 0) {
                   impInformationCell.$$('a')[0].click()
                   return
                }

            }
            
            billAndPaymentsPage.nextPageLink.getLocationInView()
            
        } while (this.isNextPageLinkEnabled());

        throw new Error("Service link was not found in Billing and Payments Table")
    }

    clickOnInvoicingLinkTranscationType(){

        let rowIndex = 0;
        let columnIndex = this.getBillingAndPaymentsColumnIndex("TRANSACTION TYPE")
        
        billAndPaymentsPage.nextPageLink.getLocationInView()

        do {
            
            if (this.isNextPageLinkEnabled() && rowIndex > 0 ) {
                billAndPaymentsPage.nextPageLink.click()
                billAndPaymentsPage.billingAndPaymentsTableBody.waitForVisible()
            }

            let rows = billAndPaymentsPage.billingAndPaymentsTableBody.$$(`tr`)
            for (let [index, row] of rows.entries()) {
                rowIndex++
                row.getLocationInView()
                let transactionTypeCell =  row.$(`td:nth-of-type(${columnIndex})`)
                let invoicingLinkCount = transactionTypeCell.$$('img').length

                if (invoicingLinkCount > 0) {
                   transactionTypeCell.$$('img')[0].click()
                   return
                }

            }
            
            billAndPaymentsPage.nextPageLink.getLocationInView()
            
        } while (this.isNextPageLinkEnabled());

        throw new Error("Invoicing was not found in Billing and Payments Table")

    }

    isInvoicingPdfDisplayed(){
        let doc = $('embed')
        doc.waitForExist(10000)
        return doc.getAttribute('type') === 'application/pdf'
        
    }

}

module.exports = new BillingAndPayments()