class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.sortDropdown = page.locator('.product_sort_container');
  }

  async addItemToCart(productName) {
    const productPath = `//div[text()="${productName}"]/ancestor::div[@class="inventory_item"]//button`;
    await this.page.locator(productPath).click();
  }

  async getCartCount() {
    return await this.shoppingCartBadge.textContent();
  }
}
module.exports = { InventoryPage };