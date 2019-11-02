const { Given, When, Then } = require('cucumber')

//Social Media Links Card verification
When(/^user click on Facebook link on media cards$/, function () {

    browser.execute(function(){
    var root = document.querySelector("#root")
    root.scrollTo(0, 600)
     })
    browser.pause(3000)

        dashboardPage.cardFacebook.waitForExist(50000)
       commonLib.clickElement(dashboardPage.cardFacebook)
       browser.pause(3000)
});

Then(/^user validate the Facebook page by validating url$/, function () {
       
        commonLib.switchWindowTab()
        //console.log(footerLinkPage.FacebookVisibleText.isExisting());

        let handles = browser.windowHandles();
        let facebook1 = false
        console.log(browser.getUrl());
        if (browser.getUrl() === "https://www.facebook.com/caamwater/") {
            facebook1 = true
        } else 

        {
            facebook1 = false
        }
     
        return facebook1;
});


Then(/^user switch back to dashboard page$/, function () {

        let handles = browser.windowHandles();
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
        //browser.debug();       
                 
});

// For twitter link
When(/^user click on twitter link on media cards$/, function () {

    
    browser.pause(3000)

        dashboardPage.cardTwitter.waitForExist(50000)
       commonLib.clickElement(dashboardPage.cardTwitter)
       browser.pause(3000)
});

Then(/^user validate the twitter page by validating url$/, function () {
       
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
             
    
        return twitter1;
        
});


Then(/^user switch back to dashboard page from twitter page$/, function () {

        let handles = browser.windowHandles();
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
        //browser.debug();       
                 
});


// for youtube link
When(/^user click on Youtube link on media cards$/, function () {

    
    browser.pause(3000)

        dashboardPage.cardYoutube.waitForExist(50000)
       commonLib.clickElement(dashboardPage.cardYoutube)
       browser.pause(3000)
});

Then(/^user validate the Youtube page by validating url$/, function () {
       
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
       

    return youtube1;
             

});


Then(/^user switch back to dashboard page from Youtube page$/, function () {

        let handles = browser.windowHandles();
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
        //browser.debug();       
                 
});

// for blog link
When(/^user click on amwater blog link on media cards$/, function () {

    
    browser.pause(3000)

        dashboardPage.cardBlog.waitForExist(50000)
       commonLib.clickElement(dashboardPage.cardBlog)
       browser.pause(3000)
});

Then(/^user validate the amwater blog page by validating url$/, function () {
       
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
       

    return blog1;
             

});


Then(/^user switch back to dashboard page from amwater blog page$/, function () {

        let handles = browser.windowHandles();
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
        //browser.debug();       
                 
});

// for puddle link
When(/^user click on puddle link on media cards$/, function () {

    
    browser.pause(3000)

        dashboardPage.cardPuddle.waitForExist(50000)
       commonLib.clickElement(dashboardPage.cardPuddle)
       browser.pause(3000)
});

Then(/^user validate the puddle page by validating url$/, function () {
       
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
       

    return puddle1;
             
         

});

Then(/^user switch back to dashboard page from puddle page$/, function () {

        let handles = browser.windowHandles();
        console.log('TabId 1:' +handles.value[0]);
        console.log(browser.getTitle());
        browser.close();
        browser.switchTab(handles.value[0])
        console.log(browser.getTitle());
        //browser.debug();       
                 
});








