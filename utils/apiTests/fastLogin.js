test('Fast login via API session injection', async ({ request, page }) => {
  const apiUtils = new ApiUtils(request);
  // Bypass the UI login for a faster functional test
  await apiUtils.createTestUser({ user: 'sdet_pro', pass: '12345' });
  
  // Inject cookies/storage state directly
  await page.context().addCookies([{ name: 'session-id', value: 'xyz123', url: 'https://saucedemo.com' }]);
  await page.goto('/inventory.html');
});