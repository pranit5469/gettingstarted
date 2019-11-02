@autopay
Feature: AutoPay enrollment

     Scenario: User has an option to enroll for AutoPay
       Given user is not enrolled for AutoPay
       Then user enrolls for AutoPay and gets "You successfully enrolled in Auto Pay! You will receive a confirmation email shortly."
       And user closes success message dialog and AutoPay card is not displayed in Dashboard

     Scenario: User has an option to Update AutoPay information
       Given user is enrolled for AutoPay to update information
       Then user updates AutoPay enrollment and gets the message "You successfully enrolled in Auto Pay! You will receive a confirmation email shortly."
       And user closes success message dialog and AutoPay card is displayed with updated Information

     Scenario: User has an option to Cancel AutoPay Enrollment
       Given user is enrolled for AutoPay
       Then user cancels AutoPay enrollment and gets the message "You successfully cancelled enrollment in Auto Pay."
       And user closes success message dialog and AutoPay card is now displayed in Dashboard

    
