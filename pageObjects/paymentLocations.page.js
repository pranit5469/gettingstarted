var json = require('json-file');
var file = json.read('./pageObjects/paymentLocations.page.json');

class paymentLocations {

    get cashPaymentLocationView() { return $(file.get('paymentLocations.selector.cashPaymentLocationView')); }
    get zipCodeTextbox() { return $(file.get('paymentLocations.selector.zipCodeTextbox')); }
    get searchButton() { return $(file.get('paymentLocations.selector.searchButton')); }
    get showMoreLink() { return $(file.get('paymentLocations.selector.showMoreLink')); }
    get locationContainer() { return $(file.get('paymentLocations.selector.locationContainer')); }
    get noSearchResultLabel() { return $(file.get('paymentLocations.selector.noSearchResultLabel')); }
    get searchLocationResults() { return $$(file.get('paymentLocations.selector.searchLocationResults')); }

}

module.exports = new paymentLocations();