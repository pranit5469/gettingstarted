class Login {

    loginToAmwater(loginId, password){
        
        loginPage.loginTextbox.waitForExist(10000)
        loginPage.loginTextbox.setValue(loginId)
        console.log('Entered loginID');
        loginPage.passwordTextbox.setValue(password)
        console.log('Entered password');
        loginPage.loginButton.click();
        console.log('Clicked on Login button');

        //Handle Paperless billing acknowledgement if appears
        let paperLessUrl = browser.getUrl()

        if (paperLessUrl.includes('paperlessBillingInterceptEnroll.do')) {
            loginPage.noThanksButton.waitForExist(10000)
            loginPage.noThanksButton.click()
            console.log('Clicked on No Thanks button')

        }

        dashboardLib.waitUntilDashboardLoads()

    }

}

module.exports = new Login();