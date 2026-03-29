import { extended as test } from "../fixtures/articles.fixture";
import { expect } from "@playwright/test";

test.describe("Article API tests", () => {
  test("Create an article through API", async ({ createdArticle }) => {
    //console.log(createdArticle);
    await expect(createdArticle.article).toHaveProperty("slug");
  });
});
