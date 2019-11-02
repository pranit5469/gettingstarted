@am_User
Feature: User navigates to Usage projection card and verifies the data.

   Scenario: user can see projected gallons from usage projection card
     Given user navigates to usage projection card
     When user navigates to usage projection
     Then user view projected gallons
     Then user view current month projection
     Then user view days left
     Then user view service period