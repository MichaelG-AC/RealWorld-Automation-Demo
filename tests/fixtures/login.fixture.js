import { test } from "@playwright/test";
import { UserApi } from "../../api/user.api";
import userCredentials from "../../testData/userCredentials.json";

export const loginFixture = test.extend({
  authenticatedPage: async ({ page, request, context }, use) => {
    const userAPI = new UserApi(request);
    const accessToken = await userAPI.login(
      userCredentials.user.email,
      userCredentials.user.password,
    );

    await context.addInitScript((token) => {
      window.localStorage.setItem("jwtToken", token);
    }, accessToken);
    await use(page);
  },
});
