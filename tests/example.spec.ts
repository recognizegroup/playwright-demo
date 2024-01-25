import { test, expect } from '@playwright/test';

test('Look around the Recognize site', async ({ page }) => {
  await page.goto('https://recognize.nl/');
  await expect(page.getByRole('heading', { name: 'CONNECTED.POSSIBILITIES.' })).toBeVisible();
  await page.getByRole('link', { name: 'Ontdek Recognize' }).click();
  await expect(page.getByRole('heading', { name: 'DÉ VERBINDER VAN BUSINESS EN' })).toBeVisible();
  await expect(page.getByText('Ons verhaal De wereld om ons')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Ons verhaal' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Waarom we doen wat we doen' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Onze werkwijze' })).toBeVisible();
  await expect(page.locator('#menu-main-menu-nl').getByRole('link', { name: 'Over Recognize' })).toBeVisible();
  await expect(page.locator('#menu-main-menu-nl').getByRole('link', { name: 'Onze Diensten' })).toBeVisible();
  await expect(page.locator('#menu-main-menu-nl').getByRole('link', { name: 'Cases' })).toBeVisible();
  await expect(page.locator('#menu-main-menu-nl').getByRole('link', { name: 'Insights' })).toBeVisible();
  await expect(page.locator('#menu-main-menu-nl').getByRole('link', { name: 'Onze Werkwijze' })).toBeVisible();
  await expect(page.locator('#menu-main-menu-nl').getByRole('link', { name: 'Werken bij' })).toBeVisible();
  await expect(page.locator('#menu-main-menu-nl').getByRole('link', { name: 'Contact' })).toBeVisible();
});
