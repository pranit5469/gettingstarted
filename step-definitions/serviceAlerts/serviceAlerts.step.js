const { Given, When, Then } = require('cucumber')

//Service Alerts verification
When(/^user fetched content and date month from service alerts$/, function () {

    //console.log('content: ' +dashboardPage.serviceAlertsContent.getText());
    
    browser.execute(function(){
    var root = document.querySelector("#root")
    root.scrollTo(0, 600)
     })
    browser.pause(3000)

    var g = dashboardPage.serviceAlertsContent.getText()
    console.log("#####################################")
    console.log(g)

     var g1 = dashboardPage.serviceAlertsContent2.getText()
    console.log("#####################################")
    console.log(g1)

     var g2 = dashboardPage.serviceAlertsContent3.getText()
    console.log("#####################################")
    console.log(g2)

    
});


Then(/^user click on View More link$/, function () {
    //dashboardPage.ServiceAlertsViewMore.waitForExist(50000)
    commonLib.clickElement(dashboardPage.ServiceAlertsViewMore)
    commonLib.switchWindowTab()
    console.log('Page title: ' +browser.getTitle());

    //browser.pause(3000)

    var g3 = dashboardPage.AlertsPage1.getText()
    console.log("#####################################")
    console.log(g3)

    // var replace1 = g3.replaceAll(" ", "");
    // console.log(replace1)


    // var service1
    // if(g3.includes("Seaside"))
    //     {
    //         service1 = true
    //     }

    // var string1 = g.includes(g3);
    // console.log(string1)

    
});
Then(/^user validate alerts page by validating page title$/, function () {
    
        var expectText1
        console.log(browser.getTitle());
        browser.pause(3000)
        if (browser.getTitle() === "California > Alerts") 
            {
            expectText1 = true
            }
        else 

        {
            expectText1 = false
        }
           
                   
        return expectText1;
       
   
});

Then(/^by validating content text \"([^\"]*)\"$/, function (expMessage) {

        var alertsText = commonLib.getElementText(dashboardPage.AlertsText)
        console.log(alertsText);
        commonLib.assertElementText(dashboardPage.AlertsText, expMessage)

        let handles = browser.windowHandles();
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
   
});



