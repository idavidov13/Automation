/// <reference types="Cypress" />

describe("My Forth Test Suite", () => {
  it("My First Test Case", () => {
    //open the given URL
    cy.visit("https://qaclickacademy.com/practice.php");

    //handling alerts
    cy.get("#alertbtn").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    //handling confirmation events
    cy.get("#confirmbtn").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    //handling child tab by invoke function and removing attribute
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "https://www.qaclickacademy.com/");

    //browser navigation "back"
    cy.go("back");
  });
});
