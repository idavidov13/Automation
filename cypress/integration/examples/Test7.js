/// <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import "cypress-iframe";

describe("My Seenth Test Suite", () => {
  it("My First Test Case", () => {
    //open the given URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //handling frames
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find('a[href*="mentorship"]').eq(0).click();
  });
});
