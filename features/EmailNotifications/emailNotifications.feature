@am_LoginUserVerifyEmailNotifications
Feature: A registered user can verify the email notifications

   Scenario: To verify if user can verify email notifications that are being sent to primary email id when user changes something successfully  of Edit Profile section
   Given user navigates to Edit User Profile page and modifies fields
     When user make changes to the fields
     Then user receives email notifications in the primary email id