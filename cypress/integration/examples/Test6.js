/// <reference types="Cypress" />

describe("My Sixth Test Suite", () => {
  it("My First Test Case", () => {
    //open the given URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //getting attribute value by jQuery
    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");
      cy.visit(url);

      //click on something from different domain than the original in the test case
      cy.origin(url, () => {
        cy.get('div.sub-menu-bar a[href*="about"]').click();
      });
    });
  });
});
