///<reference type = "cypress" >

describe("",() => {
var values =[];
    before(() => {
        cy.fixture('owner-details.json').then(function (details) {
            values.push(details.firstName);
            values.push(details.lastName);
            values.push( details.add);
            values.push(details.city)
            values.push(details.telephone);
        });
    })

    beforeEach(() => {
        cy.visit("/")
        cy.get('[href$="owners/find"]').should("be.visible").as("findOwner");
        cy.get('@findOwner').click();
        cy.get('[href$="owners/new"]').should("be.visible").click();
        cy.get("#firstName").should("be.visible").type(values[0]);
        cy.get("#lastName").should("be.visible").type(values[1]);
        cy.get("#address").should("be.visible").type(values[2]);
        cy.get("#city").should("be.visible").type(values[3]);
        cy.get("#telephone").should("be.visible").type(values[4]);
        cy.get(".btn").should("be.visible").click();
        cy.get('[href$="pets/new"]').should("be.visible").click();
    })

    it("should add pets ",() => {
        cy.get(".form-group").first().find("label").first().invoke("text").should("contain","Owner");
        cy.get(".form-group").first().find("div").first().invoke("text").should("include",values[0]+" "+values[1])
        cy.get('#name').type("Tomy");
        //cy.get("")

    })


})