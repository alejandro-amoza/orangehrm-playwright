import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('');
  }

  async fillUsername(username: string) {

    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async submit() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async getErrorMessage() {
    return this.page.locator('.oxd-alert-content-text');
  }

  async clickForgotPassword() {
    await this.page.getByText('Forgot your password?').click();
  }

  async getForgotPasswordUrl() {
    return this.page.url();
  }

async clickSocialMedia(name: 'LinkedIn' | 'Facebook' | 'X' | 'YouTube') {
  const socialIndex: Record<typeof name, number> = {
    'LinkedIn': 0,
    'Facebook': 1,
    'X': 2,
    'YouTube': 3
  };

  const index = socialIndex[name];
  await this.page.getByRole('link').nth(index).click();

}

  async clickOrangeHRMLink() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'OrangeHRM, Inc' }).click()
    ]);
    return newPage;
  }
}
