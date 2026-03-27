import { expect, test } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";
import { LoginPage } from "../../page_objects/LoginPage";
import userCredentials from "../../testData/userCredentials.json";

test.describe("Login tests", () => {
  test("logs in with valid credentials and redirects to home page", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.gotoSignIn();
    await loginPage.login(
      userCredentials.user.email,
      userCredentials.user.password,
    );

    await expect(homePage.username).toBeVisible();
    await expect(homePage.yourFeedButton).toBeVisible();
  });
});
