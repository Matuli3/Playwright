const {test, expect} = require('@playwright/test')
//const {hello, helloworld} = require('./demo/hello')
// import {hello, helloworld} from './demo/hello'   //this also works
//console.log (hello());
//console.log (helloworld());

test('My first test', async ({page}) =>  {

    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle('Google')
})