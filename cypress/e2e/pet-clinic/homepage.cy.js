/// <reference types="cypress" />

describe('Validate image on home page ', () => {

    it('Compare full page of home page image', () => {
        cy.visit("/");
        cy.compareSnapshot('fixtures/pet-assignment-page.png',0.2);
    })
})