@am_mediaCard
Feature: Social Media Marketing card all links verification

    Scenario: Verify user is able to click and verify all social media link on marketing cards
    When user click on Facebook link on media cards
    Then user validate the Facebook page by validating url
    And user switch back to dashboard page
    When user click on twitter link on media cards
    Then user validate the twitter page by validating url
    And user switch back to dashboard page from twitter page
    When user click on Youtube link on media cards
    Then user validate the Youtube page by validating url
    And user switch back to dashboard page from Youtube page
    When user click on amwater blog link on media cards
    Then user validate the amwater blog page by validating url
    And user switch back to dashboard page from amwater blog page
    When user click on puddle link on media cards
    Then user validate the puddle page by validating url
    And user switch back to dashboard page from puddle page