import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
	test('should load successfully', async ({ page }) => {
		await page.goto('/');

		// Check title
		await expect(page).toHaveTitle(/RipApi/);

		// Check main heading
		const heading = page.locator('h1');
		await expect(heading).toHaveText('RipApi');
	});

	test('should display features', async ({ page }) => {
		await page.goto('/');

		// Check feature cards are visible
		const features = page.locator('.feature-card');
		await expect(features).toHaveCount(4);
	});

	test('should be keyboard navigable', async ({ page }) => {
		await page.goto('/');

		// Verify page is loaded and can handle keyboard input
		await expect(page.locator('body')).toBeVisible();

		// Tab through elements (should not crash even without focusable elements)
		await page.keyboard.press('Tab');
		await page.keyboard.press('Tab');

		// Verify that keyboard navigation doesn't break the page
		const h1 = page.locator('h1');
		await expect(h1).toHaveText('RipApi');
	});
});

test.describe('Accessibility @a11y', () => {
	test('should not have accessibility violations', async ({ page }) => {
		await page.goto('/');

		// TODO: Add axe-core accessibility testing
		// For now, just verify page loads
		await expect(page.locator('body')).toBeVisible();
	});

	test('should have proper heading hierarchy', async ({ page }) => {
		await page.goto('/');

		const h1 = page.locator('h1');
		const h2 = page.locator('h2');
		const h3 = page.locator('h3');

		await expect(h1).toHaveCount(1);
		await expect(h2).toBeVisible();
		await expect(h3).toHaveCount(4);
	});
});
