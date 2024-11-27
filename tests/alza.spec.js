import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.alza.sk/');
 // await page.getByTestId('button-removeText').click();
  await page.getByPlaceholder('Čo hľadáte? Napr. kábel').fill('iphone 16');
  await page.getByRole('link', { name: 'Rozumiem' }).click();
  await page.getByTestId('button-search').click();
  await page.getByRole('link', { name: 'Najdrahšie' }).click();
  await page.getByRole('link', { name: 'iPhone 16 Pro 1 TB čierny titán', exact: true }).first().click();
  await page.getByRole('link', { name: ' Do košíka' }).click();
  await page.locator('#varBToBasketButton').click();
});