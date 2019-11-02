@am_conservationTips
Feature: A registered user can see the conservation tips
  A registerd user must be able to login to Amwater application and can check the conservation tips

    @am_conservationtipDisplay
    Scenario: User can check the conservation tips are displayed with correct content
      Given user navigates to usage menu
      When user click on Conservation Tips
      Then Conservation tips is displayed on the card "Conservation Tips"
      
    @am_contentForEachTips
    Scenario: User can check all the  conservation tips are displayed with correct content
      Given again user navigates to usage menu
      When again user click on Conservation Tips
      Then user navigates to each conservation tips and verify the content

    @am_verifycontentForEachTips
    Scenario: User can check all the  conservation tips are displayed with correct content in detail
      Given user navigates to usage menu to verify detailed content
      When user click on Conservation Tips to verfiy detailed content
      Then user navigates to each conservation tips and verify the content for each tips   