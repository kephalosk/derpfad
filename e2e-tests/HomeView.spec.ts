import { test, expect } from '@playwright/test';
import config from '../config';

test('has title', async ({ page }) => {
  await page.goto(config.BASEPATH);

  await expect(page).toHaveTitle('EasyWebPath.com');
});

test('has Chapter 1: Basics link', async ({ page }) => {
  await page.goto(config.BASEPATH);

  // await page.getByRole('link', { name: 'Chapter 1: Basics' }).click();
  const dropdown = page.locator('.chapter');

  await expect(dropdown).toBeVisible();
});

test('has heading banner', async ({ page }) => {
  await page.goto(config.BASEPATH);
  const name = await page.innerText('.banner-heading');
  expect(name).toContain('Concept 1: Personal Computer');
});