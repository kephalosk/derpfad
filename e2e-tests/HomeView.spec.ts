import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost/');

  await expect(page).toHaveTitle('derpfad');
});

test('has about link', async ({ page }) => {
  await page.goto('http://localhost/');

  await page.getByRole('link', { name: 'About' }).click();

  await expect(page.getByRole('heading', { name: 'This is an about page' })).toBeVisible();
});