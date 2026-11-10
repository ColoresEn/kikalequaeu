import { test, expect } from '@playwright/test';

test.describe('Auth pages', () => {
  test('login page renders accessible form', async ({ page }) => {
    await page.goto('/login');

    await expect(
      page.getByRole('heading', { name: 'Acceso' }),
    ).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Contraseña')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Enviar' })).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Registrate' }),
    ).toHaveAttribute('href', '/register');
  });

  test('shows validation errors for empty login submit', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('button', { name: 'Enviar' }).click();

    await expect(page.getByText(/email/i).first()).toBeVisible();
  });

  test('register page renders accessible form', async ({ page }) => {
    await page.goto('/register');

    await expect(
      page.getByRole('heading', { name: 'Crear cuenta' }),
    ).toBeVisible();
    await expect(page.getByLabel('Nombre')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Contraseña')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Enviar' })).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Inicia sesión' }),
    ).toHaveAttribute('href', '/login');
  });
});
