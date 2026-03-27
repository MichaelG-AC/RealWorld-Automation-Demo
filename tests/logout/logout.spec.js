import { expect } from "@playwright/test";
import { loginFixture as test } from "../fixtures/login.fixture";
import { HomePage } from "../../page_objects/HomePage";
import { LoginPage } from "../../page_objects/LoginPage";

test.describe("Login tests", () => {
  test("logs out user and redirects to homepage", async ({
    page,
    authenticatedPage,
  }) => {
    const homePage = new HomePage(page);

    await authenticatedPage.goto("/");
    await homePage.logout();

    await expect(homePage.signinButton).toBeVisible();
    await expect(homePage.signupButton).toBeVisible();
  });
});
