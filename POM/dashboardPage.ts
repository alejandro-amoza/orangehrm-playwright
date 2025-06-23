import { Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async logout() {
    await this.page.locator('span.oxd-userdropdown-tab').click(); 
    await this.page.getByRole('menuitem', { name: 'Logout' }).click();
  }
}
