@am_accountInfo
Feature: A registered user can Login to Dashboard and can see the account information

   Scenario: User can check account & meter information
    Given user navigates to Dashboard page
    When user clicks on plus button to expand the account information
    Then user clicks on account number & verifies it
    And user clicks on Meters service type & verifies the same
    And user clicks on meter serial number & verifies the same
    And user clicks on meter size & verifes it
    And user clicks on meter location & verifes it
    And user clicks on installation date & verifes it
    And user is displayed with all the account information