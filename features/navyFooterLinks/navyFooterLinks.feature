@am_NavyFooter
Feature: Navy Footer links redirection in new tab

    Scenario: verify user able to open Navy Footer Links in new tab link in new browser tab
        When user clicks on Leak Detection Information link in Footer
        Then validate Leak Detection Information link is successfully redirecting to Leak Detection Information page by verifying url
        When user click on Leak Detection Information Spanish link in Footer
        Then validate Leak Detection Information Spanish link is successfully redirecting to Leak Detection Information page by verifying url
        When user click on bill calculator link in Navy Footer
        Then user validate Bill calculator page with page title "CUSTOMER BILL CALCULATOR"
        And validate Bill Calculator link is successfully redirecting to Bill Calculator page by verifying url
        When user click on Search for openings link
        Then validate the career opening page with text "Career Opportunities"
        And validate Career opening page by verifying url
        When user click on view Accomadation Policy
        Then user validate accomodation page with text "ACCOMMODATIONS"
        And verify accomodation page by validating url
        Then user click on Adjustment Request form


