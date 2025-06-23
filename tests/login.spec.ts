import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/loginPage';
import users from '../data/fixture.json';

test.describe('Login en OrangeHRM', () => {
  test('CP 01 - Login exitoso', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.fillUsername(users.validUser.username);
    await login.fillPassword(users.validUser.password);
    await login.submit();

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('h6')).toContainText('Dashboard');
  });

  test('CP 02 - Login con credenciales inválidas', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.fillUsername(users.invalidUser.username);
    await login.fillPassword(users.invalidUser.password);
    await login.submit();

    await expect(await login.getErrorMessage()).toContainText('Invalid credentials');
  });

  test('CP 03 - Login con campos vacíos', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.submit();

    await expect(page.locator('.oxd-input-group .oxd-text')).toHaveCount(2);
  });

  test('CP 04 - Solo username', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.fillUsername(users.onlyUser.username);
    await login.submit();

    await expect(page.locator('.oxd-input-group .oxd-text')).toHaveCount(1);
  });

  test('CP 05 - Solo password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.fillPassword(users.onlyPassword.password);
    await login.submit();

    await expect(page.locator('.oxd-input-group .oxd-text')).toHaveCount(1);
  });

  test('CP 06 - Redirección al "Forgot your password?"', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.clickForgotPassword();
    await expect(page).toHaveURL(/requestPasswordResetCode/); 
  });

  test('CP 07 - Redirección de redes sociales', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    const links = ['LinkedIn', 'Facebook', 'X', 'YouTube'] as const;

    for (const name of links) {
      const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        login.clickSocialMedia(name)
      ]);
      await newPage.waitForLoadState();
      expect(newPage.url()).toContain(name.toLowerCase());
      await newPage.close();
    }
  });

  test('CP 08 - Redirección del enlace OrangeHRM, Inc', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    const newPage = await login.clickOrangeHRMLink();
    await newPage.waitForLoadState();

    expect(newPage.url()).toContain('orangehrm.com');
    await newPage.close();
  });

});




