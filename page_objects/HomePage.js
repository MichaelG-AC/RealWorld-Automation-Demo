import userCredentials from "../testData/userCredentials.json";

export class HomePage {
  constructor(page) {
    this.page = page;

    this.signinButton = this.page.getByRole("link", { name: "Sign in" });
    this.signupButton = this.page.getByRole("link", { name: "Sign up" });
    this.settingsButton = this.page.getByRole("link", { name: "Settings" });
    this.logoutButton = this.page.getByRole("button", {
      name: "Or click here to logout.",
    });
    this.username = this.page.getByRole("link", {
      name: userCredentials.user.name,
    });
    this.yourFeedButton = this.page.getByRole("link", { name: "Your Feed" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async logout() {
    await this.settingsButton.click();
    await this.logoutButton.click();
  }

  async gotoSignIn() {
    await this.page.goto("/");
    await this.signinButton.click();
  }
}
