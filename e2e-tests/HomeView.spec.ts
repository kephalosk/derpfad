import { test, expect } from '@playwright/test';
import config from '../config';

test('has title', async ({ page }) => {
  await page.goto(config.BASEPATH);

  await expect(page).toHaveTitle('derpfad');
});

test('has Chapter 1: Basics link', async ({ page }) => {
  await page.goto(config.BASEPATH);

  await page.getByRole('link', { name: 'Chapter 1: Basics' }).click();

  await expect(page.getByRole('heading', { name: 'The Easy Path To Master Web Development' })).toBeVisible();
});

test('has InfoCard', async ({ page }) => {
  await page.goto(config.BASEPATH);
  const name = await page.innerText('.cardPersonalComputer');
  console.log(name);
  expect(name).toContain('Personal Computer');
});