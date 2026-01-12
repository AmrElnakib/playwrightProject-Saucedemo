const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const users = require('../data/users.json');
const products = require('../data/products.json');

test.describe('E2E: Purchase Journey', () => {
  test('User should be able to add a product to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await inventoryPage.addItemToCart(products.backpack);
    
    const count = await inventoryPage.getCartCount();
    expect(count).toBe('1');
  });
});