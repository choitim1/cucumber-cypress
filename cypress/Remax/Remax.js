
/// <reference types="Cypress" />
require('@cypress/xpath');
import {Given,Then, When, And} from '@badeball/cypress-cucumber-preprocessor';
//const { When, Then, And , Given} = require("@badeball/cypress-cucumber-preprocessor");

Given("I navigate to REMAX website", () => {
    cy.visit('https://www.remax.com')
})
When("I input email", function () {
    //cy.xpath('// span[text()="Account"]').click()
    cy.get('button[data-test="account-side-menu-button"]').click()
    cy.wait(2000)
    cy.get('[data-test="d-input"]').type("choitim@mail.ru")
})
When("I input password",()=>{
    cy.get('[data-test="continue-button"]').click()
    cy.get('[type="password"]').type('333Test777!')
})
When("Click submit",()=>{
    cy.get('[type="submit"]').click()
})
Then("I should be logged in",()=>{
    cy.xpath("// span[text()='My Account']").should('text','My Account')

})


 Given("User click on menu",()=>{
    cy.get('[class="dbutton dbutton-remax icon-left secondary"]').click() 
 })

When('User click on Property search',()=>{
    cy.get('a[href="/homes-for-sale"]').click()
    
    cy.url().should('contains','https://www.remax.com/homes-for-sale')
})    
When('User enter "1234 S 1450 W"',()=>{
 
     cy.wait(2000)
     cy.get('.placeholder').type('1234 S 1450 W')
     cy.wait(2000)
     cy.get('[data-test="auto-complete-result"]')
     cy.wait(2000)

   
    cy.xpath('//a[text()="1234 S 1450 W  "]').click()
    cy.location().then(yieldedObject => cy.log(yieldedObject.href))
    
   
     
    });
 




   
    //cy.get('h2[class="mb-4 md:mb-8"]').should('have.text', 'Details for 1234 S 1450 W')

  






