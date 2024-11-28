import test, { page, expect } from '@playwright/test';

test('Assertion Demo', async ({page}) => {
    page.goto('https://kitchen.applitools.com/')
    await page.pause()
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    if( await page.$('heading', { name: 'The Kitchen'})){
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    await page.waitForTimeout(5000);
})