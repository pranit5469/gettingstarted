@am_autopay
Feature: autopay in dashboard

    Scenario: autopay card should be displayed if autopay is not enrolled for the user
      Given user navigates to Edit User Profile page to check for autopay
      When user navigates to the autopay enrollment section
      Then unenroll autopay if it is subscribed and navigate to dashboard "Auto Pay"