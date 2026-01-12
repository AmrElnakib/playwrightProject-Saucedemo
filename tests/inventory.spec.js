const { test, expect } = require('@playwright/test');

test.describe('Post-Login Features', () => {
  test.beforeEach(async ({ page }) => {
    // No login calls needed!
    await page.goto('https://www.saucedemo.com/inventory.html');
  });

  test('Should see the product list immediately', async ({ page }) => {
    const title = await page.locator('.title');
    await expect(title).toHaveText('Products');
  });
});