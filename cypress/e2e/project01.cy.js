/// <reference types="cypress" />
describe("Homework01", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-1");
  });
  it("Test Case 01 - Validate the Contact Us information", () => {
    


    // cy.get('.mb-5 > h1')
    // cy.get('#address').contains('2800 S River Rd Suite 310, Des Plaines, IL 60018')
    // cy.get('#email').contains('info@techglobalschool.com')
    // cy.get('#phone-number').contains('(224) 580-2150')
  });
  it("Test Case 02 - Validate the Full name input box", () => {
    cy.get(':nth-child(1) > .control > .input').should('be.visible')
  });
  it("Test Case 03 - Validate the Gender radio button", () => {
  });
  it("Test Case 04 - Validate the Address input box", () => {
  });
  it("Test Case 05 - Validate the Email input box", () => {
  });
  it("Test Case 06 - Validate the Phone input box", () => {
  });
  it("Test Case 07 - Validate the Message text area", () => {
  });
  it("Test Case 08 - Validate the Consent checkbox", () => {
  });
  it("Test Case 09 - Validate the SUBMIT button", () => {
  });
  it("Test Case 10 - Validate the form submission", () => {
  });
});