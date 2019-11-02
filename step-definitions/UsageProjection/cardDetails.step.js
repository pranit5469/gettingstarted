const { Given, When, Then } = require('cucumber')

Given(/^user navigates to usage projection card$/, function () {
    browser.pause(3000) 
    browser.moveToObject('//*[@id="usageProjection"]/div',0,1000)
    });

    When(/^user navigates to usage projection$/, function () {
    browser.pause(3000)
    });

    Then(/^user view projected gallons$/ , function (){
    var Premonthusage = $('//*[@id="usageProjection"]/div/div/div/div[2]/div[1]/div/div[2]/div/div/div[1]')
    var value=Premonthusage.getValue()
    if(value==9900)
    console.log('gallons value is correct')
    else
    console.log('gallons value is incorrect')
    });

    Then(/^user view current month projection/ , function (){
    var Currentmonthproj = $('//*[@id="usageProjection"]/div/div/div/div[2]/div[2]/div/div[2]/div/div/div[1]')
    var value1=Currentmonthproj.getValue()
    if(value1==27395)
    console.log('projection value is correct')
    else
    console.log('projection value is incorrect')
    });

    Then(/^user view days left$/ , function (){
        var days = $('//*[@id="usageProjection"]/div/div/div/div[2]/div[3]/div[2]/div[2]/div/div/div[1]') 
        var ndays=days.getValue()
        if (ndays==3)
        console.log('Days are correct') 
        else
        console.log('Day are incorrect') 
    });

    Then(/^user view service period$/ , function (){
        var service1 = $('//*[@id="usageProjection"]/div/div/div/div[2]/div[4]/div[2]/div[2]/div/div/div[1]')
        var smonth=service1.getValue()
        var service2 = $('//*[@id="usageProjection"]/div/div/div/div[2]/div[4]/div[2]/div[2]/div/div/div[3]')
        var emonth=service2.getValue()
        if(smonth==06 && emonth==08)
        console.log('service period is correct')
        else
        console.log('service period is incorrect')
        browser.pause(2000)
        });



