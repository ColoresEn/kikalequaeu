import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('renders hero content and primary actions', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', {
        level: 1,
        name: /Tu plaza de aparcamiento, sin dar vueltas por el centro/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByText(/Esoma S\.L\. ofrece parking para residentes y comercios/i),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Reserva tu plaza' }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Consultar disponibilidad' }),
    ).toBeVisible();
    await expect(
      page.getByRole('img', { name: 'Logo Esoma Parking' }),
    ).toBeVisible();
  });

  test('shows feature highlights', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', { name: 'Pensado para el uso diario' }),
    ).toBeVisible();
    for (const title of ['Acceso controlado','Seguridad constante','Disponibilidad 24/7','Tarifas claras']) {
      await expect(page.getByRole('heading', { name: title })).toBeVisible();
    }
  });

  test('navigates to contact from CTA', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Contactar' }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(
      page.getByRole('heading', { name: 'Reserva y contacto' }),
    ).toBeVisible();
  });
});
