const { Given, When, Then, And } = require('cucumber')

Given(/^user navigates to Dashboard page$/, function () {
});
When(/^user clicks on plus button to expand the account information$/, function () {

    // var plusBtn = $('#root > div:nth-child(3) > div.defaultLayout > div.dashboard-wrapper.push-up-85 > div > div.ant-layout-sider > div > div.sc-gzVnrw.cbyzUV > div > div > div > div > div.ant-collapse-header > div')
    browser.pause(3000)
    browser.moveToObject('//div[@class="account-no"]',0,700)
    // var accNO = $('//*[@id="root"]/div[3]/div[2]/div[3]/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[1]')
    // accNO.click()
    // browser.pause(1000)


});

Then(/^user clicks on account number & verifies it$/, function () {
    var accNO = $('//div[@class="account-no"]')
    accNO.click()
    var getaccNO = accNO.getText()
    if(getaccNO=="Account No: 1015-210020918063")
    console.log('Account no. is correct')
    else
    console.log('Account no. is not correct')



    // var Currentmonthproj = $('//*[@id="usageProjection"]/div/div/div/div[2]/div[2]/div/div[2]/div/div/div[1]')
    // var value1=Currentmonthproj.getValue()
    // if(value1==11858)
    // console.log('projection value is correct')
    // else
    // console.log('projection value is incorrect')
    

});



Then(/^user clicks on Meters service type & verifies the same$/, function () {
    browser.moveToObject('//div[@class="meter"][1]/div[2]',0,700)
    var meterServiceType = $('//div[@class="meter"][1]/div[2]')
    meterServiceType.click()
    var getmeterServiceType = meterServiceType.getText()
    if(getmeterServiceType=="Water")
    console.log('Meter Service Type is correct')
    else
    console.log('Meter Service Type is not correct')


});

Then(/^user clicks on meter serial number & verifies the same$/, function () {
    browser.moveToObject('//*[contains(text(),"Service Type")]/following-sibling::div[contains(text(),"S/N")]',0,800)
    var meterSerialNumber = $('//div[@class="meter"][1]/div[@class="meter-details"][2]')
    meterSerialNumber.click()
    var getmeterServiceType = meterSerialNumber.getText()
    if(getmeterServiceType=="26731323")
    console.log('Meter Serial no. is correct')
    else
    console.log('Meter Serial no. is not correct')
});


Then(/^user clicks on meter size & verifes it$/, function () {
    browser.moveToObject('//div[@class="meter"][1]/div[@class="meter-details"][3]',0,850)
    var meterSize = $('//div[@class="meter"][1]/div[@class="meter-details"][3]')
    meterSize.click()
    // var getmeterSize = meterSize.getText()
    // if(getmeterSize==11858)
    // console.log('Meter Size is correct')
    // else
    // console.log('Meter Size is not correct')


});

Then(/^user clicks on meter location & verifes it$/, function () {
    browser.moveToObject('//div[@class="meter"][1]/div[@class="meter-details"][4]',0,870)
    var meterLocation = $('//div[@class="meter"][1]/div[@class="meter-details"][4]')
    meterLocation.click()
    var getmeterLocation = meterLocation.getText()
    if(meterLocation==11858)
    console.log('Meter location is correct')
    else
    console.log('Meter location is not correct')

});

Then(/^user clicks on installation date & verifes it$/, function () {
    browser.moveToObject('//div[@class="meter"][1]/div[@class="meter-details"][5]',0,890) 
    var meterInstallationDate = $('//div[@class="meter"][1]/div[@class="meter-details"][5]')
    meterInstallationDate.click()
    var getmeterInstallationDate = meterInstallationDate.getText()
    if(meterInstallationDate==11858)
    console.log('Meter installation date is correct')
    else
    console.log('Meter installation date is not correct')

});

Then(/^user is displayed with all the account information$/, function () {
    
    console.log('All the user account information verified successfully!')
    browser.pause(4000)
});