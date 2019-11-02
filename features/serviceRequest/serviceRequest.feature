@am_serviceRequest
Feature: Validate fields Service Request card

    Scenario: service request description
        Then service description visible in the card is "Please call us for any customer service requests including starting or stopping service."
     
    Scenario: service request number
        Then service request number "1-888-237-1333" is visible in the card

    Scenario: service request availibility
        Then customer support hours "Hours: Monday - Friday 7 am - 7 pm" is visible in the card
        And emergency suppport "For emergencies: We are available 24/7" is visible in the card
