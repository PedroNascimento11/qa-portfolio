import { test, expect } from '@playwright/test';

test('Add item to cart and verify name + price', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');

    // Select first product on the homepage
    const firstProduct = page.locator('.card-title a').first();
    const productName = await firstProduct.innerText();
    await firstProduct.click();

    // Extract product price from product page
    const priceText = await page.locator('.price-container').innerText();
    const price = priceText.match(/\$(\d+)/)[1];

    // Add to cart
    await page.locator('a:has-text("Add to cart")').click();
    await page.waitForTimeout(2000); 

    // Navigate to Cart
    await page.locator('#cartur').click();

    // Verify name and price in cart
    const cartItemName = await page.locator('#tbodyid td').first().innerText();
    const cartItemPrice = await page.locator('#tbodyid td:nth-child(3)').innerText();

    expect(cartItemName).toContain(productName);
    expect(cartItemPrice).toBe(price);
});
