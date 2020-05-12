const BASE_URL = 'http://localhost:3001';

class ArticleService {
  async getItems() {
    const result = await fetch(`${BASE_URL}/articles`);

    return await result.json();
  }
}

export default new ArticleService();
