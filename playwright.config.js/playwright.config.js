const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 2,               // Handle flaky tests
  workers: 4,               // Parallel execution
  reporter: [['html'], ['list']], 
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry', // Record traces for debugging
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  ],
});