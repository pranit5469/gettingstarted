require('../resources/commonFunctions.js');

xdescribe("Navigate to products page", function(){

    beforeEach(function(){

        reporter.feature('Navigate to products page - Execution: ' + browser.desiredCapabilities.browserName);

    });

    it("should link to products page", function(){
    

        browser.url('./');
        var expected = browser.getUrl();
        var actual = "http://127.0.0.1:8303/";
        

        var aboutus_compareResult = browser.ValiateImage('a[href="#about"]', imgComp.link_about_us)
        //console.log(aboutus_compareResult[0].isWithinMisMatchTolerance);

        //expect(aboutus_compareResult[0].isWithinMisMatchTolerance).to.be.true;

        //var robotSelection_compareResult = browser.ValiateImage('.fancy.button.large', imgComp.link_see_our_vase_robot_selection);
        //console.log(robotSelection_compareResult[0].isWithinMisMatchTolerance);

        //expect(robotSelection_compareResult[0].isWithinMisMatchTolerance).to.be.true;

        browser.click('a[href="#about"]');
        expect(1).to.equal(1);
        //browser.debug();
        
        console.log("Breakpoint2");

        var expectedBrowerTitle = browser.getTitle();
        var actualBrowerTitle = "Robot Parts Emporium";

        expect(expectedBrowerTitle).to.equal(actualBrowerTitle);
        console.log("Breakpoint3");

        var Url = browser.getUrl();
        console.log('Page URL is: ' + Url);

        //expect(1).to.equal(2)
        
    })

})