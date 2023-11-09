Feature: Adding a new computer

@test
  Scenario: Add a new PC with all informations
    Given I am on computers page
    When I click 'Add new computer'
    And I visit the add new computer page
    And I fill all fields
    And I click 'Create this computer'
    Then I should be redirected to the computers page
    And I should be able to read the success mensage

@test 
  Scenario: Add a new PC with only required informations
    Given I am on computers page
    When I click 'Add new computer'
    And I visit the add new computer page
    And I type the computer name field
    And I click 'Create this computer'
    And I should be redirected to the computers page
    Then I should be able to read the success mensage

@test 
  Scenario: Try to add a new computer only with empty fields
    Given I am on computers page
    When I click 'Add new computer'
    And I visit the add new computer page
    And I click 'Create this computer'
    Then I shouldn't be redirected to the computers page
    And I should be able to read the required field mensage

@test 
  Scenario: Try to add a new computer with wrong date format 
    Given I am on computers page
    When I click 'Add new computer'
    And I visit the add new computer page
    And I type the computer name field
    And I type the introduced and discontinued fields with a wrong date format
    And I click 'Create this computer'
    And I shouldn't be redirected to the computers page
    Then I should be able to read the wrong date format mensage
