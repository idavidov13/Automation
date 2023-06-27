/// <reference types="Cypress" />

describe("My First Test Suite", () => {
  before(function () {
    //runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("My First Test Case", function () {
    //open the given URL
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    //enter some data from data file (it is stored into fixtures/example.json)
    cy.get(":nth-child(1) > .form-control").type(this.data.name);
    cy.get("#exampleFormControlSelect1").select(this.data.gender);
    //check is the entered name is the same as the name in "Two-way Data Binding example" field
    cy.get(":nth-child(4) > .ng-untouched").should(
      "have.value",
      this.data.name
    );
    //check is the minimum length of the name is set to 2
    cy.get(":nth-child(1) > .form-control").should(
      "have.attr",
      "minlength",
      "2"
    );
    //check if "Entrepreneur" radio button is disabled
    cy.get("#inlineRadio3").should("be.disabled");

    //open the shop
    cy.get(":nth-child(2) > .nav-link").click();
    //select product with custom made Cypress function (it is stored into support/commands.js)
    cy.selectProduct("Blackberry");
  });
});
