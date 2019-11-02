const { Given, Then} = require('cucumber')

Given(/^user reaches to Dashboard page after the login$/, function () {
   
  //username
    browser.pause(2000)
    var userName = $('//div[@class="user-details"]/div[@class="name"]')
    userName.click()
    var getuserName = userName.getText()
    if(getuserName=="Debbie Prosser")
    console.log('User no. is correct')
    else
    console.log('User no. is correct')
    browser.pause(1000)
    //email ID
    
    var emailID = $('//div[@class="user-details"]/div[@class="details"][1]')
    emailID.click()
    var getemailID = emailID.getText()
    if(getemailID=="Email: priyanka.rawat@accionlabs.com")
    console.log('Email id is correct')
    else
    console.log('Email id is not correct')

    browser.pause(1000)
    //primary phone number

    var phoneNo = $('//div[@class="user-details"]/div[@class="details"][2]')
    phoneNo.click()
    var getphoneNo = phoneNo.getText()
    if(getphoneNo=="Primary Phone: (123) 456-7894")
    console.log('Phone no. is correct')
    else
    console.log('Phone no. is not correct')

    browser.pause(1000)
    //customer for
    

    var custForYrs = $('//div[@class="user-details"]/div[@class="details"][3]')
    custForYrs.click()
    var getcustForYrs = custForYrs.getText()
    if(getcustForYrs=="Primary Phone: (123) 456-7894")
    console.log('Customer for yrs. information is correct')
    else
    console.log('Customer for yrs. information is not correct')

    browser.pause(1000)
    //last login

    var lastLogin = $('//div[@class="user-details"]/div[@class="details"][4]')
    lastLogin.click()
    var getlastLogin = lastLogin.getText()
    if(getlastLogin=="Last Login: Sep 17, 2018 06:46:46")
    console.log('Last Login information is fetched')
    else
    console.log('Last Login information is not fetched')
    browser.pause(1000)
  });

 Then(/^user verifies all his basic information$/, function () {
    
  });

