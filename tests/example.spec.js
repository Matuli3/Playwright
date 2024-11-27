// @ts-check
const { test, expect } = require('@playwright/test');

let context;
let page;

test.beforeAll(async ({ browser }) => {
  // Create a new browser context
  context = await browser.newContext();

  // Start tracing with snapshots and screenshots enabled
  await context.tracing.start({
    snapshots: true,
    screenshots: true,
  });

  // Create a new page in the context
  page = await context.newPage();
});

test.afterAll(async () => {
  // Stop tracing and save to a zip file
  await context.tracing.stop({ path: 'test2.zip' });
  await context.close();
});

test('has title', async () => {
  // Navigate to Playwright's website
  await page.goto('https://playwright.dev/');

  // Verify the title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async () => {
  // Navigate to Playwright's website
  await page.goto('https://playwright.dev/');

  // Click the "Get started" link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify the heading "Installation" is visible
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
