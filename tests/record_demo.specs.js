const { webkit, devices } = require('playwright');

(async () => {
  const browser = await webkit.launch({
    headless: false
  });
  const context = await browser.newContext({
    ...devices['iPhone 14'],
  });
  const page = await context.newPage();
  await page.goto('https://m.alza.sk/');
  await page.getByRole('link', { name: 'Rozumiem' }).click();
  await page.getByPlaceholder('Hľadané slovo').click();
  await page.getByPlaceholder('Hľadané slovo').fill('iphone 16');
  await page.getByPlaceholder('Hľadané slovo').press('Enter');
  await page.locator('iframe[title="Dialógové okno Prihlásiť sa účtom Google"]').contentFrame().getByLabel('Zatvoriť').click();
  await page.getByRole('link', { name: 'Ľudová voľba Lacné, ale dobre' }).click();
  await page.getByText('.cls-1{fill:none} Do košíka').click();
  await page.locator('span').filter({ hasText: 'Do košíka' }).first().click();
  await page.getByRole('button', { name: 'Pokračovať' }).nth(1).click();

  // ---------------------
  await context.close();
  await browser.close();
})();