@am_feedbackSubmit
Feature: A registered user can submit the feedback
  A registerd user must be able to login to Amwater application and can submit the feedback

    @am_submitByManadatoryField
    Scenario: User can submit the feedback using all the manadatory fields
      Given user navigates to feedback modal view
      When user selects radio button for first question and second question
      Then user submit the feedback form
      And feedback is successfull with message "Thank you for providing your feedback"

    @am_submitByAllField
    Scenario: User can submit the feedback using all the fields
      Given again user navigates to feedback modal view
      When again user selects radio button for first question and second question and the comment box
      Then user submit the feedback form again
      And feedback is successfull with a message "Thank you for providing your feedback"

    @am_submitByOneField
    Scenario: User cannot submit the feedback using one manadatory fields
      Given  a user navigates to feedback modal view
      When user selects radio button for second question only
      Then user tries to submit the feedback form
      And feedback submission ask for the selection of fields with a validation message
