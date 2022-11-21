

/// <reference types="Cypress" />

import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
Given('I navigate to automation exercise website', () => {
    cy.visit('https://automationexercise.com/');
})
When('I enter email credentials', () => {
    cy.get('a[href="/login"]').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type('example1@test.com');
    })
When("I enter password credentials", () => {
        cy.get('input[data-qa="login-password"]').type('foobar');
        cy.get('button[data-qa="login-button"]').click();
    })

Then('I should be logged in', () => {
    cy.contains('Logged in as ').should('be.visible');
})


Given("User wants to by men Tshirt",()=>{
    cy.get('a[href="/product_details/2"]').click()
    cy.get('h2').contains('Men Tshirt').should('have.text','Men Tshirt')
})
When("User add to the cact",()=>{
    cy.get('button[class="btn btn-default cart"]').click()
})
Then('User see confirmation {string}',(confirmation)=>{
    cy.get("h4[class='modal-title w-100']").should('have.text',confirmation)
})