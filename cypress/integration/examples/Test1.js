/// <reference types="Cypress" />

describe("My First Test Suite", () => {
  it("My First Test Case", () => {
    //open the given URL
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    //search all products that starts with "ca"
    cy.get(".search-keyword").type("ca");

    //assert there are 4 visible products
    cy.get(".product:visible").should("have.length", 4);
    //Another way:
    //cy.get(".product").find(".product").should("have.length", 4)

    //add to cart the third product
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
    //Another way:
    //cy.get(':nth-child(3) > .product-action > button').click()

    //add to cart "cashews" by going through the array
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find(".product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    // assert if the logo text is correctly displayed
    cy.get(".brand").should("have.text", "GREENKART");

    //print logo of the website in logs
    cy.get(".brand").then(function (logoElement) {
      cy.log(logoElement.text());
    });
  });
});
