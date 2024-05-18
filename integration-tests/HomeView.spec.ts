import { test, expect } from '@playwright/test';
import config from "../config";

test('matches screenshot', async ({ page }): Promise<void> => {
  await page.goto(config.BASEPATH);

  await expect(page).toHaveScreenshot();
});