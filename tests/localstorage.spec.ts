import {expect, test} from "@playwright/test";

test.describe.configure({mode: "serial"})
test('Open page, write text and save state', async ({ page }) => {
    await page.goto('http://scripting.com/misc/localStorageDemo.html');
    await expect(page.getByText('localStorage Demo')).toBeVisible();
    await expect(page.locator('#idTextarea')).toBeEmpty();
    await page.locator('#idTextarea').fill('Hello world');
    await expect(page.locator('#idCharCount')).toHaveText('11');

    await page.context().storageState({ path: 'localstorage.state.json' });
});

test('load state and see previous text', async ({ browser }) => {
    // Create new page with saved state
    const page = await browser.newPage({
        storageState: 'localstorage.state.json',
    });

    await page.goto('http://scripting.com/misc/localStorageDemo.html');
    await expect(page.getByText('localStorage Demo')).toBeVisible();
    await expect(page.locator('#idTextarea')).toHaveValue('Hello world');
});
