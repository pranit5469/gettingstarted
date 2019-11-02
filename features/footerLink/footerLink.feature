@am_footer
Feature: Footer page links redirection in new tab

    Scenario: verify user able to open privacy policy footer link in new browser tab
        When user clicks on Privacy Policy link in Footer
        Then user validate Privacy Policy page with page title "PRIVACY POLICY"
        And Privacy Policy link is successfully redirecting to Privacy Policy Page by validating page url

    Scenario: verify user able to open Terms Of Use footer link in new browser tab
        When user clicks on Terms Of Use link in Footer
        Then user validate Terms of Use page with page title "TERMS OF USE"
        And Terms of Use link is successfully redirecting to Terms of Use Page by validating page url


    Scenario: verify user able to open Feedback footer link and verify it
        Given user navigates to feedback from footer link
        When user selects radio button for first question and second question for footer
        Then user submit the feedback form for footer
        And feedback is successfull with message for footer first "Thank you for providing your feedback"

    @am_submitByAllField
    Scenario: User can submit the feedback using all the fields
      Given again user navigates to feedback from footer link
      When again user selects radio button for first question and second question and the comment box for footer
      Then user submit the feedback form again for footer
      And feedback is successfull with a message for footer second "Thank you for providing your feedback" 

    @am_submitByOneField
    Scenario: User cannot submit the feedback using one manadatory fields
      Given a user navigates to feedback from footer link
      When user selects radio button for second question only for footer
      Then user tries to submit the feedback form for footer
      And feedback submission ask for the selection of fields with a validation message for footer
    
      Scenario: verify user able to open Facebook footer icon link in new browser tab
      When user clicks on Facebook link in Footer
      Then Facebook link is successfully redirecting to Facebook by validating page url
      

      Scenario: verify user able to open Twitter footer icon link in new browser tab
        When user clicks on Twitter link in Footer
        Then Twitter link is successfully redirecting to Twitter by validating page url
        

    Scenario: verify user able to open Youtube footer icon link in new browser tab
        When user clicks on Youtube link in Footer
        Then Youtube link is successfully redirecting to Youtube Page by validating page url
        

    Scenario: verify user able to open Blog footer icon link in new browser tab
        When user clicks on blog link in Footer
        Then blog link is successfully redirecting to blog Page by validating page url


    Scenario: verify user able to open PuddleDuck footer icon link in new browser tab
        When user clicks on PuddleDuck link in Footer
        Then PuddleDuck link is successfully redirecting to PuddleDuck Page by validating page url
    
        

