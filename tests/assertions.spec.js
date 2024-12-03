import test, { page, expect } from '@playwright/test';
import { doesNotMatch } from 'assert';

test('Assertion Demo', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/')
    //Assertions
    //check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    if( await page.$('heading', { name: 'The Kitchen' })) {
        await page.getByRole('heading', { name: 'The Kitchen' }).click()

    }
    // check element hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
  //  await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    // check element enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled

    // check text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    //await expect(page.locator('The Kitchen')).toHaveClass(/.*css-dpmy2a/)
    // await expect(page.locator('text=The Kitchen')).not.toHaveText('text=The Kitchen');
   

    // check attribute value
    //  await expect(page.locator('selector')).toHaveAttribute('class', 'chakra-heading css-dpmy2a') 
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)   
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //Check URL
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    await page.pause()
    //visual validation with screenshot
    await expect(page).toHaveScreenshot()

    await page.waitForTimeout(5000);


})