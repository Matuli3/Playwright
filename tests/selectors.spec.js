import { test, expect } from '@playwright/test';

test('Selectors_Saucedemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //await page.waitForTimeout(5000);
  await page.pause()
  //using any object property
  await page.click('id=user-name')
  await page.locator('id=user-name').fill('Edison')  

  //using CSS selector
  await page.locator('#login-button').click()
  
  //xpath

  await page.locator('xpath=//input[@id="user-name"]').fill('Faraday')   
  await page.locator('//input[@id="user-name"]').fill('Ramujan')


  // using Text
  await page.locator('text=LOGIN').click
  await page.waitForTimeout(2000);
  await page.locator('input:has-text("LOGIN")').click();
  await page.locator('text=LOGIN').click


});