var json = require('json-file');
var file = json.read('./pageObjects/navyFooterLinks.page.json');

class navyFooterLinks {

    get BillCalculatorText() { return $(file.get('navyFooterLinks.selector.billCalculatorText')); }
    get okButtonPopup() { return $(file.get('navyFooterLinks.selector.okButtonCareer')); }
    get CareerPageText() { return $(file.get('navyFooterLinks.selector.careerPageText')); }
    get AccomodationText() { return $(file.get('navyFooterLinks.selector.accomodationText')); }
}

module.exports = new navyFooterLinks();