class ApiUtils {
  constructor(request) {
    this.request = request;
  }

  async createTestUser(payload) {
    const response = await this.request.post('/api/users', {
      data: payload
    });
    return response.json();
  }
}
module.exports = { ApiUtils };