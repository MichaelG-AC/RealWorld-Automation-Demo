export class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailField = this.page.getByRole("textbox", { name: "Email" });
    this.passwordField = this.page.getByRole("textbox", { name: "Password" });
    this.signInButton = this.page.getByRole("Button", { name: "Sign In" });
  }

  async login(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}
