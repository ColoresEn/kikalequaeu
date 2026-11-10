import { test, expect } from '@playwright/test';

test.describe('Contact page', () => {
  test('renders contact form and business information', async ({ page }) => {
    await page.goto('/contact');

    await expect(
      page.getByRole('heading', { name: 'Deje su mensaje' }),
    ).toBeVisible();
    await expect(page.getByLabel('Nombre')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Teléfono')).toBeVisible();
    await expect(page.getByLabel('Mensaje')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Enviar mensaje' })).toBeVisible();

    await expect(
      page.getByRole('heading', { name: 'Información' }),
    ).toBeVisible();
    await expect(page.getByText('690 029 812')).toBeVisible();
    await expect(page.getByText('parkingesoma@gmail.com')).toBeVisible();
  });

  test('shows validation feedback for invalid contact submission', async ({
    page,
  }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: 'Enviar mensaje' }).click();

    await expect(page.locator('[data-slot="form-message"]').first()).toBeVisible();
  });

  test('accepts valid field input without submitting server action', async ({
    page,
  }) => {
    await page.goto('/contact');
    await page.getByLabel('Nombre').fill('Test User');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Teléfono').fill('600000000');
    await page.getByLabel('Mensaje').fill('Consulta de prueba');

    await expect(page.getByLabel('Nombre')).toHaveValue('Test User');
    await expect(page.getByLabel('Email')).toHaveValue('test@example.com');
    await expect(page.getByLabel('Teléfono')).toHaveValue('600000000');
    await expect(page.getByLabel('Mensaje')).toHaveValue('Consulta de prueba');
  });
});
