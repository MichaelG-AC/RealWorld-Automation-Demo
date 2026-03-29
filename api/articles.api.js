import { faker } from "@faker-js/faker";

export class ArticlesApi {
  constructor(request, accessToken) {
    this.request = request;
    this.accessToken = accessToken;
  }

  async createArticle() {
    const response = await this.request.post(
      "https://api.realworld.show/api/articles",
      {
        headers: {
          Authorization: `Token ${this.accessToken}`,
        },
        data: {
          article: {
            title: faker.book.title(),
            description: faker.commerce.productMaterial(),
            body: faker.lorem.paragraph(),
            tagList: [faker.word.adjective()],
          },
        },
      },
    );
    return await response.json();
  }

  async deleteArticle(slug) {
    const response = await this.request.delete(
      `https://api.realworld.show/api/articles/${slug}`,
      {
        headers: {
          Authorization: `Token ${this.accessToken}`,
        },
      },
    );
  }
}
