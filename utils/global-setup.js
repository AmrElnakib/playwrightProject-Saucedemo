const { chromium } = require('@playwright/test');
const fs = require('fs');

async function globalSetup(config) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  
  // Save the signed-in state to a file
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

module.exports = globalSetup;