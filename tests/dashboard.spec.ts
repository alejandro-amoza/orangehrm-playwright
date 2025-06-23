import { test, expect } from '@playwright/test';
import { DashboardPage } from '../POM/dashboardPage';
import { LoginPage } from '../POM/loginPage';
import users from '../data/fixture.json';

test('CP 06 - Logout exitoso', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.goto();
  await login.fillUsername(users.validUser.username);
  await login.fillPassword(users.validUser.password);
  await login.submit();

  await expect(page).toHaveURL(/dashboard/);

  await dashboard.logout();

  await expect(page).toHaveURL(/auth\/login/);
  await expect(page.getByPlaceholder('Username')).toBeVisible();
});