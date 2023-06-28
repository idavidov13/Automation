class CheckoutPage {
  getStringTotal() {
    return cy.get(":nth-child(3) > :nth-child(4)");
  }
}

export default CheckoutPage;
