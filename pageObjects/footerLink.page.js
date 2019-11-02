var json = require('json-file');
var file = json.read('./pageObjects/footerLink.page.json');

class footerLink {

    get PrivacyPolicylink() { return $(file.get('footerLink.selector.PrivacyPolicylink')); }
    get PrivacyPolicyHeadertag() { return $(file.get('footerLink.selector.PrivacyPolicyHeadertag')); }
    get TermsOfUseHeadertag() { return $(file.get('footerLink.selector.TermsOfUseHeadertag')); }
    get FacebookFooterLink() { return $(file.get('footerLink.selector.facebookFooterLink')); }

    get FacebookVisibleText() { return $(file.get('footerLink.selector.facebookVisibleText')); }
    get TwitterVisibleText() { return $(file.get('footerLink.selector.twitterVisibleText')); }
    get YoutubeVisibleText() { return $(file.get('footerLink.selector.youtubeVisibleText')); }
    get PuddleDuckVisibleText() { return $(file.get('footerLink.selector.puddleDuckVisibleText')); }
    
    //Footer Media Link


}

module.exports = new footerLink();