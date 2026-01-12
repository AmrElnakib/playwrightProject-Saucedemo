const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const users = require('../data/users.json');

test('Should sort products by Price (High to Low)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login(users.validUser.username, users.validUser.password);

  await inventoryPage.sortDropdown.selectOption('hilo');
  
  const firstItemPrice = await page.locator('.inventory_item_price').first().textContent();
  // Senior SDET tip: Remove currency symbols to compare numbers
  const priceValue = parseFloat(firstItemPrice.replace('$', ''));
  expect(priceValue).toBeGreaterThan(40); 
});