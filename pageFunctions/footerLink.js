var json = require('json-file');
var file = json.read('./pageObjects/footerLink.page.json');
var json = require('json-file');
var file = json.read('./pageObjects/dashboard.page.json');


class FooterLink {

    navigateToPrivacyPolicy(){
                
        browser.pause(3000)
        commonLib.scrollToScreenBottom()
       footerLinkPage.PrivacyPolicylink.waitForExist(50000)
       commonLib.clickElement(footerLinkPage.PrivacyPolicylink)
       browser.pause(3000)
             

        }

    validatePrivacyPolicyPage()
    {
        let handles = browser.windowHandles();
        console.log(footerLinkPage.PrivacyPolicyHeadertag.isExisting());
        browser.pause(3000)
        var Privacy1
        console.log(browser.getUrl());
        browser.pause(3000)
        if (browser.getUrl() === "https://amwater.com/corp/privacy-policy") 
            {
            Privacy1 = true
            }
        else 

        {
            Privacy1 = false
        }
           
        
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
            
        return Privacy1;
                 
    
                      
    };


    navigateToTermsofUse(){

        commonLib.scrollToScreenBottom()
        dashboardPage.termsOfUse.waitForExist(50000)
       // browser.debug();
        commonLib.clickElement(dashboardPage.termsOfUse)

    }

    validateTermsOfUsePage(){

        commonLib.switchWindowTab()
        console.log(footerLinkPage.TermsOfUseHeadertag.isExisting());

        let handles = browser.windowHandles();
        let Terms1 = false
        console.log(browser.getUrl());
        if (browser.getUrl() === "https://amwater.com/corp/terms-of-use") {
            Terms1 = true
        } else 

        {
            Terms1 = false
        }
        

        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
        //browser.debug();
    
        return Terms1;
                 

    }

    navigateToFooterFacebook(){

        commonLib.scrollToScreenBottom()
        dashboardPage.FacebookFooterLink.waitForExist(50000)
        console.log(dashboardPage.FacebookFooterLink.isExisting());
        commonLib.clickElement(dashboardPage.FacebookFooterLink)

    }
  
    
    validateFacebookPage(){

        commonLib.switchWindowTab()
        console.log(footerLinkPage.FacebookVisibleText.isExisting());

        let handles = browser.windowHandles();
        let facebook1 = false
        console.log(browser.getUrl());
        if (browser.getUrl() === "https://www.facebook.com/caamwater/") {
            facebook1 = true
        } else 

        {
            facebook1 = false
        }
        

        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
        //browser.debug();
    
        return facebook1;
                 

    }
    
    navigateToFooterTwitter(){

        commonLib.scrollToScreenBottom()
        dashboardPage.TwitterFooterink.waitForExist(50000)
        console.log(dashboardPage.TwitterFooterink.isExisting());
        commonLib.clickElement(dashboardPage.TwitterFooterink)

    }
  
    
    validateTwitterPage(){

        commonLib.switchWindowTab()
        console.log(footerLinkPage.TwitterVisibleText.isExisting());

        let handles = browser.windowHandles();
        let twitter1 = false
        console.log(browser.getUrl());
        if (browser.getUrl() === "https://twitter.com/caamwater") {
            twitter1 = true
        } else 

        {
            twitter1 = false
        }
        

        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
        //browser.debug();
    
        return twitter1;
                 

    }


//Youtube navigation
navigateToFooterYoutube(){

    commonLib.scrollToScreenBottom()
    dashboardPage.YoutubeFooterink.waitForExist(50000)
    console.log(dashboardPage.YoutubeFooterink.isExisting());
    commonLib.clickElement(dashboardPage.YoutubeFooterink)

}


validateYoutubePage(){

    commonLib.switchWindowTab()
    console.log(footerLinkPage.YoutubeVisibleText.isExisting());

    let handles = browser.windowHandles();
    let youtube1 = false
    console.log(browser.getUrl());
    if (browser.getUrl() === "https://www.youtube.com/user/caamwater") {
        youtube1 = true
    } else 

    {
        youtube1 = false
    }
    

    console.log('TabId 1:' +handles.value[0]);
    console.log(browser.getTitle());
    browser.close();
    browser.switchTab(handles.value[0])
    console.log(browser.getTitle());
    //browser.debug();

    return youtube1;
             

}

//Blog navigation
navigateToFooterBlog(){

    commonLib.scrollToScreenBottom()
    dashboardPage.BlogFooterink.waitForExist(50000)
    console.log(dashboardPage.BlogFooterink.isExisting());
    commonLib.clickElement(dashboardPage.BlogFooterink)

}


validateBlogPage(){

    commonLib.switchWindowTab()
    //console.log(footerLinkPage.YoutubeVisibleText.isExisting());

    let handles = browser.windowHandles();
    let blog1 = false
    console.log(browser.getUrl());
    if (browser.getUrl() === "https://waterstreet.blog/") {
        blog1 = true
    } else 

    {
        blog1 = false
    }
    

    console.log('TabId 1:' +handles.value[0]);
    console.log(browser.getTitle());
    browser.close();
    browser.switchTab(handles.value[0])
    console.log(browser.getTitle());
    //browser.debug();

    return blog1;
             

}
//Puddle Duck navigation
navigateToFooterPuddleDuck(){

    commonLib.scrollToScreenBottom()
    dashboardPage.PuddleDuckFooterink.waitForExist(30000)
    console.log(dashboardPage.PuddleDuckFooterink.isExisting());
    commonLib.clickElement(dashboardPage.PuddleDuckFooterink)

}
validatePuddleDuckPage(){

    commonLib.switchWindowTab()
    console.log(footerLinkPage.PuddleDuckVisibleText.isExisting());

    let handles = browser.windowHandles();
    let puddle1 = false
    console.log(browser.getUrl());
    if (browser.getUrl() === "https://amwater.com/corp/about-us/puddles") {
        puddle1 = true
    } else 

    {
        puddle1 = false
    }
    

    console.log('TabId 1:' +handles.value[0]);
    console.log(browser.getTitle());
    browser.close();
    browser.switchTab(handles.value[0])
    console.log(browser.getTitle());
    //browser.debug();

    return puddle1;
             

}

};
module.exports = new FooterLink()