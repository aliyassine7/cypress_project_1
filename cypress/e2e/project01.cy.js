/// <reference types="cypress" />
describe("Homework01", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-1");
  });

  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.get(".is-size-3").should('have.text', 'Contact Us');
    cy.get("#address").should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
    cy.get("#email").should('have.text', 'info@techglobalschool.com');
    cy.get("#phone-number").should('have.text', '(224) 580-2150');
  });

  it("Test Case 02 - Validate the Full name input box", () => {
    cy.get('.field .label').eq(0)
    .should('have.text', 'Full name *')

     cy.get('.control >.input').eq(0)
    .should('have.attr', 'placeholder', 'Enter your full name');

    cy.get('.control >.input').eq(0)
    .should('be.visible')
    .and('have.attr', 'required')
  });

  it("Test Case 03 - Validate the Gender radio button", () => {
    cy.get('.control .label').eq(0)
    .should('have.text', 'Gender *')

    cy.get('.mr-1').should('have.attr', 'required')

    const gender = ['Male', 'Female', 'Prefer not to disclose']

    cy.get('.radio').each(($el, index) => {
      cy.wrap($el).should('have.text', gender[index])
      cy.wrap($el).children().should('be.enabled').and('not.be.checked')
    })

    cy.get('.radio').eq(0).click()
    cy.get('.radio').each(($el, index) => {
      if($el.text() === 'Male') {
        cy.wrap($el).children().should('be.checked')
      }
      else {
        cy.wrap($el).children().should('not.be.checked')
      }
    })

    cy.get('.radio').eq(1).click()
    cy.get('.radio').each(($el, index) => {
      if($el.text() === 'Female') {
        cy.wrap($el).children().should('be.checked')
      }
      else {
        cy.wrap($el).children().should('not.be.checked')
      }
    })
  });

  it("Test Case 04 - Validate the Address input box", () => {
    cy.get('.input').eq(1)
    .should('have.attr', 'placeholder', 'Enter your address')
    .and('be.visible')
    .and('not.have.attr', 'required');

    cy.get('.label').eq(2)
    .should('have.text', 'Address');
  });

  it("Test Case 05 - Validate the Email input box", () => {
    cy.get('.input').eq(2)
    .should('be.visible')
    .and('have.attr', 'placeholder', 'Enter your email')
    .and('have.attr', 'required')

    cy.get('.label').eq(3)
    .should('have.text', 'Email *')
  });

  it("Test Case 06 - Validate the Phone input box", () => {
    cy.get('.input').eq(3)
    .should('be.visible')
    .and('have.attr', 'placeholder', 'Enter your phone number')
    .and('not.have.attr', 'required')

    cy.get('.label').eq(4)
    .should('have.text', 'Phone')
  });

  it("Test Case 07 - Validate the Message text area", () => {
    cy.get('.textarea')
    .should('be.visible')
    .and('have.attr', 'placeholder', 'Type your message here...')
    .and('not.have.attr', 'required')

    cy.get('.label').eq(5)
    .should('have.text', 'Message')
  });
  
  it("Test Case 08 - Validate the Consent checkbox", () => {
    cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.');

    cy.get('.checkbox input')
    .should('be.enabled')
    .click()
    .should('be.checked')
    .uncheck()
    .should('not.be.checked')
    .and('have.attr', 'required');
  });
  
  it("Test Case 09 - Validate the SUBMIT button", () => {
    cy.get('.button.is-link').should('be.visible')
    .and('be.enabled')
    .and('have.text', 'SUBMIT')
  });
  
  const personalInfo = ['Ali Y', '12600 River Road', 'aliyassi@gmail.com', '708-123-4567', 'All Hail Plankton!']

  it("Test Case 10 - Validate the form submission", () => {
    cy.get('.radio input').eq(0).click();
    
    cy.get('.control > .input').each(($el, index) => {
      cy.wrap($el).type(personalInfo[index]);
    });
    
    cy.get('.textarea').type('All Hail Plankton!');

    cy.get('.checkbox input').click();
    cy.get('.button.is-link').click();

    Cypress.on("uncaught:exception", () => {
      return false;
    });

    cy.get('.mt-5').should('have.text', 'Thanks for submitting!');
  });
});
