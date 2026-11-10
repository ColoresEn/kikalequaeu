import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('signed-out menu exposes auth and public routes', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('navigation').getByRole('button').click();
    const menu = page.getByRole('menu');
    await expect(menu.getByRole('menuitem', { name: 'Acceso' })).toBeVisible();
    await expect(menu.getByRole('menuitem', { name: 'Registro' })).toBeVisible();
    await expect(menu.getByRole('menuitem', { name: 'Reservas' })).toBeVisible();
  });

  test('can navigate to register from menu', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Registro' }).click();

    await expect(page).toHaveURL(/\/register$/);
    await expect(
      page.getByRole('heading', { name: 'Crear cuenta' }),
    ).toBeVisible();
  });
});
