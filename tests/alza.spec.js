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
 
 // await page.pause()

  await page.getByPlaceholder('Čo hľadáte? Napr. kábel').click();
  await page.getByPlaceholder('Čo hľadáte? Napr. kábel').fill('samsung s24');
 // await page.pause()
 //await page.waitForTimeout(2000);
  await page.getByTestId('button-search').click();

  await page.getByRole('link', { name: 'Najlacnejšie' }).click();
  await page.getByRole('link', { name: 'Samsung Galaxy S24 FE 8 GB/128 GB Black' }).nth(1).click();
  await page.getByRole('link', { name: ' Do košíka' }).click();    
  await page.locator('#varBToBasketButton').click();
  await page.getByPlaceholder('Čo hľadáte? Napr. kábel').click();
  await page.getByPlaceholder('Čo hľadáte? Napr. kábel').fill('google pixel 9 pro');
 // await page.waitForTimeout(2000);
  await page.getByTestId('button-search').click();
  await page.getByRole('link', { name: 'Podľa recenzií' }).click();
  await page.getByRole('link', { name: 'Google Pixel 9 Pro 256 GB Obsidian', exact: true }).click();
  await page.getByRole('link', { name: ' Do košíka' }).click();
  await page.locator('#varBToBasketButton').click();
  await page.getByTestId('headerLogo').click();
  await page.getByTestId('headerBasketIcon').click();
  await page.locator('#r685124843').getByText('‒').click();
  await page.getByRole('button', { name: 'Odobrať tovar' }).click();
  await page.locator('#r685131251').getByText('‒').click();
  await page.getByRole('button', { name: 'Odobrať tovar' }).click();
  await page.getByRole('link', { name: 'Pokračovať' }).click();

});