import { test, expect } from '@playwright/test';

test('Demo Login Test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')

    await page.getByPlaceholder('Enter your username').fill('Tester')
    await page.getByPlaceholder('Enter your password').fill('Testerovic')

    // await page.waitForSelector('text=Sign in', { timeout: 5000 });
    await page.locator('text=Sign in').waitFor(5000);  //another way

    await page.locator('text=Sign in').click()

    //await page.getByRole('link', { name: 'Sign in' }).click();
    // await page.locator(text='ACME').click()

    await expect(page.getByRole('link', { name: 'ACME' })).toBeVisible();
    await page.waitForTimeout(2000);

})

test('Demo Login Test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php')
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Username').press('CapsLock');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('span').filter({ hasText: 'Pedrito Zanahoria' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    //await page.pause()

})

test.only('Demo Login Test 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('ControlOrMeta+a');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('ControlOrMeta+a');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.close()

})