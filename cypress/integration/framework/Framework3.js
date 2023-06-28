/// <reference types="Cypress" />
// Same as Framework2 but now we are adding checks for total price of products and total price of basket
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
import CheckoutPage from "../pageObjects/CheckoutPage";

describe("My Second Framework Suite", () => {
  before(function () {
    //runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("My Second Test Case", function () {
    //Creating object from HomePage object file
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const checkoutPage = new CheckoutPage();

    //open the given URL
    cy.visit(Cypress.env("url"));

    //enter some data from data file (it is stored into fixtures/example.json)
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);

    //check is the entered name is the same as the name in "Two-way Data Binding example" field
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);

    //check is the minimum length of the name is set to 2
    homePage.getEditBox().should("have.attr", "minlength", "2");

    //check if "Entrepreneur" radio button is disabled
    homePage.getEnterpreneurRadioButton().should("be.disabled");

    //open the shop
    homePage.getShopTab().click();

    //select product with custom made Cypress function (it is stored into support/commands.js) and with data from data file
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    //Open Checkout page and make assertions
    productPage.getCheckoutButton().click();
    checkoutPage.getStringTotal().should("be.visible");
    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, $list) => {
        const amount = $el.text();
        var res = amount.split(" ");
        res = res[1].trim();
        sum = sum + Number(res);
        cy.log(res);
      })
      .then(function () {
        cy.log(sum);
      });
    var sum = 0;
    cy.get("h3 strong").then(function (element) {
      const total = element.text();
      var resTotal = total.split(" ");
      resTotal = resTotal[1].trim();
      expect(Number(resTotal)).to.equal(Number(sum));
    });
  });
});
