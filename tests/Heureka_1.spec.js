import { test, expect } from '@playwright/test';

test('Heureka Basket roulette 1', async ({ page }) => {
 // for (let i = 0; i < 3; i++) {
 //   console.log(`Running iteration ${i + 1}`);
   
    await page.goto('https://www.heureka.sk/');
    await page.getByLabel('Odsúhlasiť a zavrieť: Odsú').click();
    await page.getByText('Hľadať0,00 €Prihlásiť sa').click();
    await page.getByTestId('heading-tips').getByTestId('heading-link').click();
    await page.getByRole('link', { name: 'Darčeky pre mužov' }).click();
    await page.locator('#price li').filter({ hasText: '- 100 €' }).locator('label').first().click();

    await page.pause()
    await page.getByText('Reprosústavy a reproduktory').click();
    await page.locator('li').filter({ hasText: 'Požadované vlastnosti' }).click();
    await page.getByRole('link', { name: 'Čas prehrávania na batérie' }).click();
    await page.locator('div').filter({ hasText: /^až15 hodin$/ }).locator('label').first().click();
    const page2Promise = page1.waitForEvent('popup');
    await page1.locator('li').filter({ hasText: 'LG ART 51LGBezdrôtový systém' }).getByTestId('product-button').click();
    const page2 = await page2Promise;

    await page.pause()
    await page.locator('li').filter({ hasText: 'Top 1JBL Charge 597 %117' }).getByTestId('product-button').click();
    await page.getByLabel('Vyberte variantu').selectOption('zelené');
  //  await page.goto('https://bluetooth-reproduktory.heureka.sk/jbl-charge-5/#prehlad/?offers-attr-filter=Farba:zelen%C3%A9');
    await page.getByText('Kúpiť cez HeurekuKúpiť').click();
    await page.getByRole('link', { name: 'Prejsť do košíku' }).click();
  
    await page.getByTestId('heading-tips').getByTestId('heading-link').click();
    await page.getByRole('link', { name: 'Darčeky pre mužov' }).click();

   //}


});