/// <reference types="Cypress" />

describe("My Third Test Suite", () => {
  it("My First Test Case", () => {
    //open the given URL
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //check the first checkbox
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    //uncheck the same checkbox
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    //check multiple checkboxes
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    //static dropdowns
    cy.get("select").select("option2").should("have.value", "option2");

    //dynamic dropdowns
    cy.get("#autocomplete").type("bu");
    cy.get(".ui-menu-item").each(($el, index, $list) => {
      if ($el.text() === "Bulgaria") {
        cy.wrap($el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "Bulgaria");

    //visible/invisible elements
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    //radio buttons
    cy.get("[value='radio2']").check().should("be.checked");
  });
});
