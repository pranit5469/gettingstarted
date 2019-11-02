@am_serviceAlerts
Feature: Service alerts content and link verfication

Scenario: verify user able to validate service alerts
When user fetched content and date month from service alerts
Then user click on View More link
Then user validate alerts page by validating page title 
And by validating content text "Latest Alerts"