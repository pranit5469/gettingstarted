@am_UserOver
Feature: User navigates to usage overview card and verifies the data

   Scenario: user can see monthly consumption details from usage overview card
     Given user navigates to usage overview page 
     When user click on the radio button having month details 
     Then user view monthly details
     
     