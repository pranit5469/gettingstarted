const { Given, When, Then } = require('cucumber')

Given(/^user navigates to usage overview page$/, function () {
browser.pause(3000) 
browser.moveToObject('#usageOverview > div > div > div > div.ant-card-body',0,1400)
browser.pause(2000)
});


When(/^user click on the radio button having month details$/, function () {
//24 hours data
var radiobuttion1 = $('//*[@id="usageTypeSelector"]/div[1]/label[1]/span[1]/input')
radiobuttion1.click()
browser.pause(2000)

//30 days data
var radiobuttion2 = $('//*[@id="usageTypeSelector"]/div[1]/label[2]/span[1]/input')
radiobuttion2.click()
browser.pause(2000)

//12 months data
var radiobuttion3 = $('//*[@id="usageTypeSelector"]/div[1]/label[3]/span[1]/input')
radiobuttion3.click()
browser.pause(1000)
var togglebutton1 = $('//*[@id="neighborhoodSwitch"]')
togglebutton1.click()
browser.pause(2000)
togglebutton1.click()
browser.pause(2000)

//24 months data
var radiobuttion4 = $('//*[@id="usageTypeSelector"]/div[1]/label[4]/span[1]/input')
radiobuttion4.click()
browser.pause(1000)
var togglebutton1 = $('//*[@id="neighborhoodSwitch"]')
togglebutton1.click()
browser.pause(2000)
togglebutton1.click()
browser.pause(2000)

//36 months data
var radiobuttion5 = $('//*[@id="usageTypeSelector"]/div[1]/label[5]/span[1]/input')
radiobuttion5.click()
browser.pause(1000)
var togglebutton1 = $('//*[@id="neighborhoodSwitch"]')
togglebutton1.click()
browser.pause(2000)
togglebutton1.click()
browser.pause(2000)

//Download button
var downloadButton = $('//*[contains(@class,"download-btn")]')
browser.moveTo(downloadButton,0,1000);
downloadButton.click()
browser.pause(100)

//PDF Button
/*var pdfButton = $('//*[contains(text(),"Download PDF")]/parent::button')

pdfButton.click()
browser.pause(10000)
browser.url('https://cpdev.amwaternp.net/4da9e11f-cc95-489d-8e43-4f7bf33f99cc')
    console.log(browser.getTitle()); 
       browser.pause(4000)
    browser.close()
    console.log(browser.getTitle()); 
     browser.pause(3000)*/

//Excel Button
var exceldownload = $('//*[@id="usageOverview"]/div[3]/div/div/div/div[2]/div/div/div/button[2]/div')
exceldownload.click()
browser.pause(3000)
//var back = $('//*[@id="usageOverview"]/div[1]/div/div/div[1]/div/div[1]')
//back.click()

browser.moveTo(downloadButton,0,1000);
downloadButton.click()
browser.pause(100)

//PDF Button
// var pdfButton = $('//*[contains(text(),"Download PDF")]/parent::button')
// pdfButton.click()
// browser.pause(10000)

});

Then(/^user view monthly details$/, function () {
    browser.pause(2000)
});