@am_alertMessageOpenRequest
Feature: A registered user can check for messages alerts & open request
  A registerd user must be able to login to Amwater application and can check the conservation tips

    @am_messages
    Scenario: User can download the pdf messages available in message section
      Given user navigates to messages
      When user see the messages available in the section with message icon and title
      Then user can download the selected pdf messages

    @am_openRequest
    Scenario: User can see the open request available in the section or not
      Given user navigates to Open Request
      When user see the open request available in the section or not

    @am_alert
    Scenario: User can check the alerts available in alerts section
      Given user navigates to alerts
      When user see the alerts available in the section with each having alert icon
      Then user see the alerts available in the section with each having alert title

    @am_latest
    Scenario: User can check the latest alert are displaying at top
      Given user again navigates to alerts
      When user see the alerts available in the section with each of them having the alert icon
      Then user see the latest alert is displaying on the top

    @am_latestMessage
    Scenario: User can check the latest alert are displaying at top
      Given user again navigates to message
      When user see the messages available in the section with each of them having the message icon
      Then user see the latest message is displaying on the top