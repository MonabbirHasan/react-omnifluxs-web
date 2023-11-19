class CLIENT_REVIEWS {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  /****************************************
   * GET ALL CLIENT API START HERE
   ****************************************/
  async get_client_review() {
    try {
      const response = await fetch(this.apiUrl);
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch books.');
      }
    } catch (error) {
      console.error(error);
    }
  }
}
export default CLIENT_REVIEWS;