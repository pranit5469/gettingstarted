const { Before, After } = require('cucumber')

var json = require('json-file');
var file = json.read('./utilities/testData.json');

Before(function () {
    
    commonLib.loadPage('./')
    loginLib.loginToAmwater(global.loginId, global.password)

});

After(function() {

    //logout from application
    if (!dashboardPage.modalWindowCloseButton.isExisting()) {
        dashboardLib.logoutAmwater()
    }

})

