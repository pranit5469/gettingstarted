@am_paperless
Feature: Paperless billing enrollment

    Scenario: user can unenroll from paperless billing enrollment
      Given user navigates to Edit User Profile page and clicks on Unenroll button
      When user accepts acknowledgement and submits form
      Then discontinue paperless billing successfull message is displayed "Discontinue Paperless Billing has been Successful."
      And user closes success mesage dialog and go paperless card is displayed in Dashboard 

    Scenario: Verify thank you message during paperless billing enrollment
      Given user click on Go Paperless Card in Dashboard
      Then Paperless billing enrollment form must be seen
      And Thank you message is seen "Thank you for requesting to participate in our paperless billing program which helps protect our environment by saving paper. Checking the box below confirms that you would like to receive your water bill and bill inserts online. You will no longer receive a paper bill. Instead, you will receive an email notification informing you that your water bill and other important information is ready for viewing through My Account. Should you want a copy for your records, you can simply print it from the web site."
      And user closes Paperless billing enrollment dialog

    Scenario: Verify acknowledgement during paperless billing enrollment
      Given user click on Go Paperless Card in Dashboard
      Then user acknowledgement message is seen "* Yes, I am confirming that I wish to receive my future water bills and communications online. I understand that once my registration has been activated, I will no longer receive a paper bill or standard paper communications."
      When user checks the acknowledgement checkbox and submits
      Then paperless enrollment successfull message is seen "Enrollment in Paperless Billing is Successful."
      And user closes Paperless billing enrollment dialog
      And go paperless card must not be visible in Dashboard