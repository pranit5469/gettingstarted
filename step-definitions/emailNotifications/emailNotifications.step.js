const { Given, When, Then } = require('cucumber')

    Given(/^user navigates to Edit User Profile page and modifies fields$/, function () {
      
    });
  
    When(/^user make changes to the fields$/, function () {
      
        browser.newWindow('http://gmail.com', 'WebdriverIO window', 'width=1260,height=900,resizable,scrollbars=yes,status=1')
         var emailID = $('//input[@id="identifierId"]')
         emailID.setValue("PRANIT.PINGALE@ACCIONLABS.COM")

         var nxtButn =$('//div[@id="identifierNext"]')
         nxtButn.click()
         browser.pause(3000)

         var passWord = $('//*[@id="password"]/div[1]/div/div[1]/input')
        passWord.setValue('saiRAM123')

        browser.pause(3000)

         var passwordNxtButn = $('//div[@id="passwordNext"]')
         passwordNxtButn.click()

         browser.pause(5000)

         var drpdwnSearch = $('#aso_search_form_anchor > button.gb_sf > svg')
         drpdwnSearch.click()

         browser.pause(3000)

         var subjectBox = $('')
         subjectBox.setValue('Name Change Request')

        //  browser.pause(3000)

         

    });
        Then(/^user receives email notifications in the primary email id$/, function () {

            
       
        });
        
        // function encrypt(text){
        //     var cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
        //     var crypted = cipher.update(text,'utf8','hex')
        //     crypted += cipher.final('hex');
        //     return crypted;
        //     }
        //     function decrypt(text){
        //     var decipher = crypto.createDecipher('aes-256-cbc','d6F3Efeq')
        //     var dec = decipher.update(text,'hex','utf8')
        //     dec += decipher.final('utf8');
        //     return dec;
        //     }
        