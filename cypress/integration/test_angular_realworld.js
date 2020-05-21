/// <reference types="Cypress" />

describe('testcase', function () {
    before(function () {
        cy.visit("https://angular.realworld.io/");
    });

    it("sign in unsuccessfully",()=>{
        cy.get('.nav-item')
            .contains('Sign in')
            .click()
        cy.get('body > app-root > app-auth-page > div > div > div > div > form > fieldset > fieldset:nth-child(2) > input')
            .clear().type('feng.li1@thoughtworks.com')
            .should("have.value","feng.li1@thoughtworks.com");
        cy.get('body > app-root > app-auth-page > div > div > div > div > form > fieldset > fieldset:nth-child(3) > input')
            .clear().type('123456789');
        cy.get('body > app-root > app-auth-page > div > div > div > div > form > fieldset > button')
            .click();
        cy.wait(100);
        cy.get('body > app-root > app-auth-page > div > div > div > div > app-list-errors > ul > li')
            .should('contain',"email or password is invalid");
    });

    it("sign in successfully", () => {
        cy.get('.nav-item')
            .contains('Sign in')
            .click()
        cy.get('body > app-root > app-auth-page > div > div > div > div > form > fieldset > fieldset:nth-child(2) > input')
            .clear().type('feng.li1@thoughtworks.com')
            .should("have.value","feng.li1@thoughtworks.com");
        cy.get('body > app-root > app-auth-page > div > div > div > div > form > fieldset > fieldset:nth-child(3) > input')
            .clear().type("12345678");
        cy.get('body > app-root > app-auth-page > div > div > div > div > form > fieldset > button')
            .click();
        cy.wait(1000);
        cy.get('body > app-root > app-layout-header > nav > div > ul > li:nth-child(4) > a').click();
        cy.url().should('include','/profile/lifeng');
    });

    it("New article",()=>{
        cy.get('body > app-root > app-layout-header > nav > div > ul > li:nth-child(2) > a')
            .click()
        cy.get('body > app-root > app-editor-page > div > div > div > div > form > fieldset > fieldset:nth-child(1) > input')
            .clear()
            .type("2") //title
        cy.get('body > app-root > app-editor-page > div > div > div > div > form > fieldset > fieldset:nth-child(2) > input')
            .clear()
            .type('2')     //description
        cy.get('body > app-root > app-editor-page > div > div > div > div > form > fieldset > fieldset:nth-child(3) > textarea')
            .clear()
            .type('3') //content
        cy.get('body > app-root > app-editor-page > div > div > div > div > form > fieldset > fieldset:nth-child(4) > input')
            .clear()
            .type('4') //tags
        cy.get('body > app-root > app-editor-page > div > div > div > div > form > fieldset > button')
            .click()
        cy.wait(1000)
        cy.url().should('include','/article/1')
    })



});