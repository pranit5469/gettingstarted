const { Given, When, Then } = require('cucumber')

Given(/^user navigates to Edit User Profile page and modifies the name & confirms name changed successfully with message$/, function () {
//click on edit profile button present in dashboard
var editButton1 = $('#edit-profile > span > svg')
editButton1.click()

browser.pause(2000)

//click on change button
var changeBtn = $('#CustomerName > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div.edit > div > button')
changeBtn.click()

browser.pause(4000)

//enter text in the middle name
var middleName = $('#mName')
browser.setValue('#mName', 'test123');
browser.pause(2000)
//click on reason
var reason1 = $('#CustomerName > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div > div > div > form > div > div:nth-child(2) > div.edit-box.reason-box > button:nth-child(2)') 
reason1.click()
browser.pause(2000)
//click on save button
var savebtn = $('#CustomerName > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div > div > div > div > div > button.save > span')
savebtn.click()
browser.pause(4000)
// var toasterNameChange = $('//div[@class="ant-message-custom-content ant-message-success"]')
// commonLib.assertElementText(toasterNameChange, nameChangeMessage)

});
When(/^user changes the contact information & confirms contact & pref.details changed successfully with message$/, function () {
// click on change button
browser.moveToObject('#CustomerContact > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div.edit > div > button',0,600);
browser.pause(2000)
var changeBtnContactPref = $('#CustomerContact > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div.edit > div > button')
changeBtnContactPref.click()


browser.pause(4000)

//enter numbers in primary phone field
browser.moveToObject('#primaryPhone',0,600)
var primaryphone1 = $('#primaryPhone')
browser.setValue('#primaryPhone', '1234567646');
browser.pause(2000)
//click on the checkbox
// browser.moveToObject('#primaryPhone',0,900)

//dynamic xpath of checkboxes : change indexes to 2 or 3 as required
// var checkboxNonurgent1 = $('//*[contains(text(),"Email")]/ancestor::*[@class="section"]//*[@class="check"][1]/button')
// checkboxNonurgent1.click()
browser.pause(1000)
browser.moveToObject('//input[@id="primaryEmail"]',0,600)
var primaryEmail = $('//input[@id="primaryEmail"]')
primaryEmail.clearElement()
browser.setValue('//input[@id="primaryEmail"]', 'pranit.pingale@accionlabs.com');
browser.pause(4000)
var confPrimaryEmail = $('//input[@id="primaryConfirmEmail"]')
confPrimaryEmail.clearElement()
browser.setValue('//input[@id="primaryConfirmEmail"]', 'pranit.pingale@accionlabs.com');
browser.pause(3000)
//scroll till save button is visible
browser.moveToObject('#CustomerContact > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-24 > div > div > div > div > div > div.save-section > div > button.save',0,750);
browser.pause(3000)
//click on save button
var savebtn3 = $('#CustomerContact > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-24 > div > div > div > div > div > div.save-section > div > button.save').click()
browser.pause(9000)
//important lines for verifying toasters
// var toasterContactChange = $('//div[@class="ant-message-custom-content ant-message-success"]')
// commonLib.assertElementText(toasterContactChange, contactChangeMessage)
});

Then(/^user changes the alert settings & confirms alert settings changed successfully with message$/, function () { 

  browser.moveToObject('#CustomerAlert > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div.edit > div > button',0,850);
  //changebutton 
  var changeAlertSettings = $('#CustomerAlert > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div.edit > div > button')
  changeAlertSettings.click()
  browser.pause(1000)
  //checkbox
  var checkboxHighUsageAlert = $('//*[contains(text(),"Email")]/ancestor::*[@class="section"]//*[@class="check"][1]/button')
  checkboxHighUsageAlert.click()

  browser.pause(2000)

  var saveAlertSettings = $('#CustomerAlert > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-24 > div > div > div > div > div > div > div > button.save > span')
  saveAlertSettings.click()

  // var toasterCAlertSettings = $('//div[@class="ant-message-custom-content ant-message-success"]')
  // commonLib.assertElementText(toasterCAlertSettings, AlertSettingsMessage)
  
});
Then(/^user changes the address & confirms address changed successfully with message$/, function () {

//scroll down page till change button to change address is visible
browser.pause(3000)
browser.moveToObject('//*//div[@id="CustomerAddress"]//div[@class="edit"]',0,920);
browser.pause(2000)

//click on change button
var changeAddress = $('//*[@id="CustomerAddress"]/div/div[2]/div/div[2]/div/button').click()

//clear the text of city
browser.pause(2000)
var streetField = $('#city').clearElement()

browser.pause(1000)
//enter the city 
browser.setValue('#city', 'testtreet1246');
//scroll till save button is visible
browser.moveToObject('#CustomerAddress > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div > div > div > div > div > button.save',0,900);
//click on save button
browser.pause(4000)
var savebtn4 = $('#CustomerAddress > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div > div > div > div > div > button.save').click()
browser.pause(4000)

// var toasterAddressChange = $('//div[@class="ant-message-custom-content ant-message-success"]')
//   commonLib.assertElementText(toasterAddressChange, addressChangeMessage)
});

Then(/^user changes the Login ID & confirms Login ID changed successfully with message$/, function () {
browser.pause(2000)

//scroll till change button to change Login id is visible
browser.moveToObject('#CustomerLoginId > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div.edit > div > button',0,900);
//click on change button
var changeLoginID = $('#CustomerLoginId > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div.edit > div > button').click()
browser.pause(2000)
//*[@id="CustomerLoginId"]/div[1]/div[2]/div/div/div/div/button[2]/span
//clear the Login Id 
var loginID = $('#loginId').clearElement()

//change the Login id
browser.setValue('#loginId', 'PEARL1111')
browser.pause(3000)  

//scroll till save button is visible
browser.moveToObject('//*[@class="save"]',0,900);
browser.pause(1000)  
// var savebtn6 = $('//*[@class="save"]')
var cancelButton = $('//div[@class="buttons"]/button[@class="cancel"]')
//click on save button
// savebtn6.click()
cancelButton.click()
// var toasterLoginIDChange = $('//div[@class="ant-message-custom-content ant-message-success"]')
//   commonLib.assertElementText(toasterLoginIDChange, LoginIDChangeMessage)
});

Then(/^user changes the Password & confirms Password changed successfully with message$/, function () {
browser.pause(3000)  

//password change
browser.moveToObject('//*[@id="CustomerPassword"]',0,900);
browser.pause(2000)
var changeBtnOFPwd = $('#CustomerPassword > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div.edit > div > button')
changeBtnOFPwd.click()
browser.pause(2000)

var oldpwd =  $('#oldPassword')
browser.setValue('#oldPassword','P1assword')
browser.pause(1000)
var newpwd =  $('#newPassword')
browser.setValue('#newPassword','P1assword')
browser.pause(1000)
var cnfrmpwd =  $('#confirmPassword')
browser.setValue('#confirmPassword','P1assword')

browser.pause(2000)
browser.moveToObject('#securityAns',0,1000);
var secuAnswer = $('#securityAns')
browser.setValue('#securityAns','testschool')
browser.pause(1000)
browser.moveToObject('#CustomerPassword > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div > div > div > div > div > button.save > span',0,1000);
//  browser.pause(2000)
browser.pause(3000)
var savebtnPWD = $('#CustomerPassword > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div > div > div > div > div > button.save > span')
savebtnPWD.click()
browser.pause(2000)
// var toasterPasswordChange = $('//div[@class="ant-message-custom-content ant-message-success"]')
//   commonLib.assertElementText(toasterPasswordChange, PasswordChangeMessage)



});

Then(/^user adds sec. acc. holder data successfully$/, function () {
//secondary account holder
browser.moveToObject('//*[@id="CustomerSecondaryAccount"]/div/div[2]/div/div[2]/div/button',0,743)
var addbtnOfSecAcc = $('//*[@id="CustomerSecondaryAccount"]/div/div[2]/div/div[2]/div/button')
addbtnOfSecAcc.click()

var fname = $('#fName')
browser.setValue('#fName', 'test123');
browser.pause(1000)
var fname = $('#lName')
browser.setValue('#lName', 'test123');
browser.pause(1000)
// var secAccHolderEmail = $('//*[@id="email"]')
// browser.setValue('//*[@id="email"]', 'test123@test.com');
// browser.pause(1000)
var secAccHolderEmail = $('//*[@id="email"]')
browser.setValue('//*[@id="email"]', 'test123@test.com');
browser.pause(1000)
var confrmEmail = $('//*[@id="confirmEmail"]')
browser.setValue('//*[@id="confirmEmail"]', 'test123@test.com');

browser.pause(1000)
var secAccPhone = $('//*[@id="phone"]')
browser.setValue('//*[@id="phone"]', '1234563890');
browser.pause(2000)
browser.moveToObject('#acknowledge',0,900)
var secAccCheckBox = $('#acknowledge')
secAccCheckBox.click()

browser.moveToObject('#CustomerSecondaryAccount > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div > div > div > div.save-section > div > button.save',0,1300);
  browser.pause(2000)
var saveAddAccholderBtn = $('#CustomerSecondaryAccount > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div > div > div > div.save-section > div > button.save')
saveAddAccholderBtn.click()
browser.pause(2000)

// var toasterSecAccHolderAdded = $('//div[@class="title"]/div[@class="name"]')
//   commonLib.assertElementText(toasterSecAccHolderAdded, SecAccHolderAddedMessage)

});

Then(/user removes sec. acc. holder data successfully$/, function () {
  browser.pause(4000)
var closeBtnAddSec = $('//*[@class="close-btn"]')
browser.pause(4000)

// var toasterSecAccHolderRemoved = $('//div[@class="title"]/div[@class="name"]')
//   commonLib.assertElementText(toasterSecAccHolderRemoved, SecAccHolderRemovedMessage)

closeBtnAddSec.waitForExist(10000)
closeBtnAddSec.getLocationInView()
closeBtnAddSec.click()

// Then(/^paperless enrollment successfull message is seen \"([^\"]*)\"$/, function (expMessage) {
//   var xab = $("//*[@id='root']/div[3]/div[2]/div[3]/div/div[1]/div/div[1]/div/div/div/div/div[1]/img")
//   xab.waitForExist(10000)
//   commonLib.assertElementText(xab, expMessage)

// });
browser.pause(2000)
var removeSecAccHolder = $('#CustomerSecondaryAccount > div > div.icon-col.profile-col.ant-col-lg-24.ant-col-xl-16 > div > div.edit > div > button')
removeSecAccHolder.click()
browser.pause(4000)

var closeBtnRemoveSec = $('//div[@class="content"]/div[@class="close-btn"]/span')

closeBtnRemoveSec.waitForExist(10000)
closeBtnRemoveSec.getLocationInView()
closeBtnRemoveSec.click()

});
