import { test, expect } from '@playwright/test';
import config from '../config';

test('has title', async ({ page }) => {
  await page.goto(config.BASEPATH);

  await expect(page).toHaveTitle('derpfad');
});

test('has about link', async ({ page }) => {
  await page.goto(config.BASEPATH);

  await page.getByRole('link', { name: 'About' }).click();

  await expect(page.getByRole('heading', { name: 'This is an about page' })).toBeVisible();
});