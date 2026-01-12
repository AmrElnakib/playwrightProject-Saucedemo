class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.zipCode = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');
    this.successHeader = page.locator('.complete-header');
  }

  async fillInformation(fName, lName, zip) {
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.zipCode.fill(zip);
    await this.continueBtn.click();
  }

  async completePurchase() {
    await this.finishBtn.click();
  }
}
module.exports = { CheckoutPage };