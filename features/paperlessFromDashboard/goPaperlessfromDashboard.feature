@am_paperless
Feature: Paperless billing in dashboard

    Scenario: paperless card should be displayed if paperless is not enrolled for the user
      Given user navigates to Edit User Profile page
      When user navigates to the paperless enrollment section
      Then unsubscribe paperless if it is subscribed and navigate to dashboard "Go Paperless"