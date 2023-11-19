class WebsiteData {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    async get_website_data() {
        try {
            const response = await fetch(this.apiUrl);
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error("data not found!");
            }
        } catch (error) {
            console.error(error)
        }
    }
}
export default WebsiteData;