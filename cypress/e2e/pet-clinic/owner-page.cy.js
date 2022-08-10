///<reference types ="cypress"/>

var first_Name;
var last_Name ;
var address;
var phone
var city
describe("Owner page validation",()=>{
    // load input once for all the test cases
    // @param input data file location
    var formValue =[];
    before(()=>{
        cy.fixture('owner-details.json').then(function (details){
            first_Name = details.firstName;
            last_Name = details.lastName;
            address =details.add;
            city = details.city
            phone = details.telephone;
            formValue.push( first_Name+ " "+ last_Name);
            formValue.push( address);
            formValue.push(city);
            formValue.push(phone);
        });
    });

    // will execute before each and every test execution
    beforeEach(()=>{
        cy.visit("/");
        cy.get('[href$="owners/find"]').should("be.visible").as("findOwner");
    })

    it("should validate last name field",()=>{
        cy.get("@findOwner").click()
        cy.get("#lastName").click().should("be.enabled").should("be.focused")
    })

    it("should add owner button available on page",()=>{
     cy.get('@findOwner').click();
     cy.get('[href$="owners/new"]').should("have.text","Add Owner").should("be.visible");
    })

    // negative test cases for form validation
    it("should not submit the form without required values",()=>{
        cy.get('@findOwner').click();
        cy.get('[href$="owners/new"]').as("addOwner");
        cy.get("@addOwner").click();
        cy.get('.btn').click()
        cy.get(".help-inline").should("have.length",5).first().should("have.text","must not be empty");
    })


    // positive test cases for fill up the owner form
    it("should fill up the owner data in the form and validate them",()=>{
        cy.get('@findOwner').click();
        cy.get('[href$="owners/new"]').as("addOwner");
        cy.get("@addOwner").click();
        cy.get("#add-owner-form").find(".form-group > label ").each(($element)=>{
            if($element.text() ==="First Name"){
                cy.get("#firstName").should("be.visible").type(first_Name);
            }else if($element.text() === "Last Name"){
                cy.get("#lastName").should("be.visible").type(last_Name);
            }else if($element.text()=== "Address"){
                cy.get("#address").should("be.visible").type(address);
            } else if($element.text()=== "City"){
                cy.get("#city").should("be.visible").type(city);
            }else if($element.text()=== "Telephone"){
                cy.get("#telephone").should("be.visible").type(phone);
            }
        });
        cy.get('.btn').should("have.text","Add Owner").click();
        cy.location().should((loc)=>{
            expect(loc.hostname).to.eq("localhost");
        });
        cy.get("h2").first().should("have.text","Owner Information");
        let values = [];
        cy.get("tbody > tr").each(($tabRow)=>{
            cy.wrap($tabRow).find("td").each(($el, $index) => {
                cy.wrap($el)
                    .invoke('text')
                    .then(text => {
                        values.push(text.trim());
                    });
            });
        }).then(() => {
            expect(values).to.deep.eq(formValue)
        });
    });
})