Feature: Login
Scenario: Login user with correct email and password
    Given  I navigate to automation exercise website
    When I enter email credentials
    When I enter password credentials
    Then I should be logged in


Scenario: User add  to cart
    Given User wants to by men Tshirt
    When User add to the cact
    Then User see confirmation "Added!"