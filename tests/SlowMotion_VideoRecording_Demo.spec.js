import {test, expect} from '@playwright/test';

test('Slow motion and video recording demo', async() =>{
    const browser = await chromium.lunch({
        slowMo: 5000,
        headless: false
        
});

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('');

    await context.close();

})