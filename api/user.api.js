export class UserApi {
  constructor(request) {
    this.request = request;
  }

  async login(email, password) {
    const response = await this.request.post(
      "https://api.realworld.show/api/users/login",
      {
        data: {
          user: {
            email: email,
            password: password,
          },
        },
      },
    );

    const body = await response.json();
    return body.user.token;
  }
}
