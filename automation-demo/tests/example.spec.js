import { test, expect } from '@playwright/test';

test('Homepage has Playwright in the title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('Docs page loads', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.click('nav >> text=Docs');
    await expect(page).toHaveURL(/docs/);
});
