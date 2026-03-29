import { test } from "@playwright/test";
import { ArticlesApi } from "../../api/articles.api";
import { UserApi } from "../../api/user.api";
import userCredentials from "../../testData/userCredentials.json";

export const extended = test.extend({
  createdArticle: async ({ request }, use) => {
    const userApi = new UserApi(request);
    const accessToken = await userApi.login(
      userCredentials.user.email,
      userCredentials.user.password,
    );

    const articlesApi = new ArticlesApi(request, accessToken);
    const articleListing = await articlesApi.createArticle();
    await use(articleListing);
    await articlesApi.deleteArticle(articleListing.article.slug);
  },
});
