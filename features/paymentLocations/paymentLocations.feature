@am_locations
Feature: Check Payment Locations by Zip codes

    Background:
        When user clicks on Payment Locations search button in Dashboard

    Scenario: Validate Payment Locations Page default status
        Then payments locations page is displayed
        And show more link is displayed and disabled
        And no search location results is shown
        And search result pane has text "No Cash Payment Locations available for ZIP Code" displayed

    Scenario: Validate number of search results for a valid zip code
        When user enters "08043"
        And user clicks on Search button
        Then show more link is enabled
        And number of search results displayed is "3"
        When user clicks on show more link
        Then number of search results displayed is "6"

    Scenario Outline: Validate address - currency and phone number in the results displayed for a valid zip code
        When user enter <zipCode> and clicks on search button
        Then address displayed must contain <state>
        And fee displayed must be in currency format with two decimal digits
        And phone number is displayed in NANP format

        Examples:
            |zipCode    |state              |
            |"73301"    |"AUSTIN TX"        |
            |"90001"    |"LOS ANGELES CA"   |
     
    Scenario: Validate locations are not diplayed for invalid zip code
        When user enter "73302" and clicks on search button
        Then no search location results is shown
        And search result pane has text "No Cash Payment Locations available for ZIP Code 73302." displayed