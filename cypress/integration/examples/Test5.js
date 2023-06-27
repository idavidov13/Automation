/// <reference types="Cypress" />

describe("My Fifth Test Suite", () => {
  it("My First Test Case", () => {
    //open the given URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //handling web tables
    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });

    //handling web tables mouse hover
    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");

    //force click on invisible elements
    // cy.contains("Top").click({ force: true });
    // cy.url().should("include", "top");
  });
});
