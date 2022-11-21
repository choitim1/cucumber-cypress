Feature: Login feature

Scenario: Success logIn
Given user open login page
When user enter the user name "standard_user"
When user enter the password "secret_sauce"
When user click on the login button
Then user will be logget in
