/// <reference types="Cypress" />

describe("My Second Test Suite", () => {
  it("My First Test Case", () => {
    //open the given URL
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    //search all products that starts with "ca"
    cy.get(".search-keyword").type("ca");

    //add to cart "cashews" by going through the array
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find(".product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.get(":nth-child(14)").click();
  });
});
