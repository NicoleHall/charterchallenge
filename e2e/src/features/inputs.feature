Feature: As a user I can interact with inputs


  @dev
  Scenario: As a user I expect to be able to search for a contact
    Given I am on the "/" page
    Then I should see a contacts list
    When the contacts search is populated with the text "Sybill Mcgowan"
    Then the contact card for "Sybill Mcgowan" should be displayed