import { test, expect } from '@playwright/test';

test('matches screenshot', async ({ page }) => {
  await page.goto('http://localhost/');

  await expect(page).toHaveScreenshot();
});