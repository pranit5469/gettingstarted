var json = require('json-file');
var file = json.read('./pageObjects/navyFooterLinks.page.json');


class NavyFooterLink {

    navigateToLeakDetection(){
                
        commonLib.scrollToScreenBottom()
       dashboardPage.LeakDetectionLink.waitForExist(50000)
       commonLib.clickElement(dashboardPage.LeakDetectionLink)
       browser.pause(3000)
             

        }

    validateLeakDetectionPage()
    {
        let handles = browser.windowHandles();
       commonLib.switchWindowTab()
        //console.log(footerLinkPage.PrivacyPolicyHeadertag.isExisting());
        browser.pause(3000)
        var nFooter2
                console.log(browser.getUrl());
        browser.pause(3000)
        if (browser.getUrl() === "https://dnnh3qht4.blob.core.windows.net/portals/1/Water%20Information/AMER0231_LeakDetectionKitWeb_Layoutopt.pdf?sr=b&si=DNNFileManagerPolicy&sig=HfXXFB7FeyWQ%2BDZZILr11KH7wjhY1qU49RiiGYXUN4Y%3D") 
            {
                nFooter2 = true
            }
        else 

        {
            nFooter2 = false
        }
           
        
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
            
        return nFooter2;
                 
    
                      
    };

    navigateToLeakDetectionSpanish(){
                
       commonLib.scrollToScreenBottom()
       dashboardPage.LeakDetectionSpanish.waitForExist(50000)
       commonLib.clickElement(dashboardPage.LeakDetectionSpanish)
       browser.pause(3000)
             

        }
    validateLeakDetectionSpanishPage()
    {
        let handles = browser.windowHandles();
       commonLib.switchWindowTab()
        //console.log(footerLinkPage.PrivacyPolicyHeadertag.isExisting());
        browser.pause(3000)
        var nFooter2
                console.log(browser.getUrl());
        browser.pause(3000)
        if (browser.getUrl() === "https://dnnh3qht4.blob.core.windows.net/portals/2/Conservation%20and%20Rebates/leak%20detection%20kit%20spanish.pdf?sr=b&si=DNNFileManagerPolicy&sig=4F5QW36GU29%2FGJolm2UUerGNolidezcwIIX2bS%2FbQcs%3D") 
            {
                nFooter2 = true
            }
        else 

        {
            nFooter2 = false
        }
           
        
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
            
        return nFooter2;
                 
    
                      
    };


    navigateToBillCalculator(){
                
       commonLib.scrollToScreenBottom()
       dashboardPage.BillCalculator.waitForExist(50000)
       commonLib.clickElement(dashboardPage.BillCalculator)
       browser.pause(3000)
             

        }

    validateBillCalculator()
    {
        let handles = browser.windowHandles();
        //commonLib.switchWindowTab()
        //console.log(footerLinkPage.PrivacyPolicyHeadertag.isExisting());
        browser.pause(3000)
        var nFooter2
                console.log(browser.getUrl());
        browser.pause(3000)
        if (browser.getUrl() === "https://amwater.com/caaw/customer-service-billing-billing-payment-info-water-rates-bill-calc") 
            {
                nFooter2 = true
            }
        else 

        {
            nFooter2 = false
        }
           
        
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
            
        return nFooter2;  
                          
    };

//Serch For Openings
    navigateToSearchForOpenings(){
                
       commonLib.scrollToScreenBottom()
       dashboardPage.BillCalculator.waitForExist(50000)
       commonLib.clickElement(dashboardPage.SearchForOpenings)
       browser.pause(3000)
             

        }

    validateCareerOpenings()
    {
        
        let handles = browser.windowHandles();
        //commonLib.switchWindowTab()
        //console.log(footerLinkPage.PrivacyPolicyHeadertag.isExisting());
        browser.pause(3000)
        var nFooter2
                console.log(browser.getUrl());
        browser.pause(3000)
        if (browser.getUrl() === "https://career4.successfactors.com/career?company=amwater") 
            {
                nFooter2 = true
            }
        else 

        {
            nFooter2 = false
        }
           
        
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
            
        return nFooter2;  
                          
    };

// Accomodation Link validation

    navigateToAccomodation(){
                
       commonLib.scrollToScreenBottom()
       dashboardPage.BillCalculator.waitForExist(50000)
       commonLib.clickElement(dashboardPage.Accomodation)
       browser.pause(3000)
             

        }

    validateAccomodation()
    {
        
        let handles = browser.windowHandles();
        //commonLib.switchWindowTab()
        //console.log(footerLinkPage.PrivacyPolicyHeadertag.isExisting());
        browser.pause(3000)
        var nFooter2
                console.log(browser.getUrl());
        browser.pause(3000)
        if (browser.getUrl() === "https://amwater.com/corp/careers/accommodations") 
            {
                nFooter2 = true
            }
        else 

        {
            nFooter2 = false
        }
           
        
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
            
        return nFooter2;  
                          
    };

//Adjustment form link

AdjustmentFormClick(){
                
       commonLib.scrollToScreenBottom()
       dashboardPage.BillCalculator.waitForExist(50000)
       commonLib.clickElement(dashboardPage.AdjustmentFormLink)
       browser.pause(3000)
             

        }

//Contact Us Link

ContactUsNavigation(){
                
       
       commonLib.clickElement(dashboardPage.ContactusLink)
       browser.pause(3000)
             

        }

validateContactUs()
    {
        
        let handles = browser.windowHandles();
        //commonLib.switchWindowTab()
        //console.log(footerLinkPage.PrivacyPolicyHeadertag.isExisting());
        browser.pause(3000)
        var nFooter2
                console.log(browser.getUrl());
        browser.pause(3000)
        if (browser.getUrl() === "https://amwater.com/caaw/customer-service-billing/contact-us") 
            {
                nFooter2 = true
            }
        else 

        {
            nFooter2 = false
        }
           
        
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
            
        return nFooter2;  
                          
    };


    
};

module.exports = new NavyFooterLink()