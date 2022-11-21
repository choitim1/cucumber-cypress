

/// <reference types="Cypress" />
//import{ Given, When, Then }from 'cypress-cucumber-preprocessor';
import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
//const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// describe("Login Test",()=>{
//     it("Success Login",()=>{
//         cy.visit('https://www.saucedemo.com');
//         cy.get("#user-name").type("standard_user")
//         cy.get("#password").type("secret_sauce")
//         cy.get("#login-button").click()
//         cy.url().should('contains', "https://www.saucedemo.com/inventory.html")
//     })
// })

Given('user open login page',()=>{
    cy.visit('https://www.saucedemo.com');
})
When('user enter the user name {string}', (username)=>{
    cy.get("#user-name").type(username)
})
When('user enter the password {string}', (password)=>{
    cy.get("#password").type(password)
})
When("user click on the login button",()=>{
    cy.get("#login-button").click()
})
Then('user will be logget in',()=>{
    cy.url().should('contains', "https://www.saucedemo.com/inventory.html")
})