# Playwright Automation Demo — Playwright.dev UI Tests

This automation demo validates two essential UI behaviors on the official Playwright documentation website:

### Homepage renders correctly
- Verifies that the website loads and the page title includes “Playwright”.

### Navigation to Docs works
- Clicks the “Docs” link in the navbar and asserts that the user is taken to the correct documentation page.

These tests demonstrate stable, fast, and reliable UI automation using Playwright’s modern test runner.

## Test Code
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

## Run locally
npm install
npx playwright test

To run with the browser GUI visible:
npx playwright test --headed

## Tech Stack
- JavaScript
- Playwright Test Runner
- Modern locators & assertions

## Why this test matters
### Even simple UI checks are valuable when building a QA automation suite:
- They validate core navigation paths
- They ensure page load and rendering works
- They provide a clean foundation to expand into deeper automation:
	- User flows
	- Forms
	- Components
	- Search
	- API integration checks

This project showcases clean, readable automation suitable for real teams looking to build stable UI test coverage.

