@am_LoginUser
Feature: A registered user can Login to Dashboard and can edit personal information

   Scenario: To verify if user can make changes successfully in various fields of Edit Profile section
     Given user navigates to Edit User Profile page and modifies the name & confirms name changed successfully with message
     When user changes the contact information & confirms contact & pref.details changed successfully with message
     Then user changes the alert settings & confirms alert settings changed successfully with message
     Then user changes the address & confirms address changed successfully with message
     Then user changes the Login ID & confirms Login ID changed successfully with message
     Then user changes the Password & confirms Password changed successfully with message
     Then user adds sec. acc. holder data successfully
     Then user removes sec. acc. holder data successfully
     
     
     

     