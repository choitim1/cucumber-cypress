






Feature: Login
    Scenario: Login user with correct email and password
        Given I navigate to REMAX website
        When I input email
        When I input password
        When Click submit
        Then I should be logged in

    Scenario: User wants to search property
        Given User click on menu
        When User click on Property search
        When User enter "1234 S 1450 W"
   
        #Then User able to see map and details