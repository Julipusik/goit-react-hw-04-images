import axios from "axios";

const BAZE_URL = 'https://pixabay.com/api/';
axios.defaults.params = { key: "38459323-6d1f9d3342befc1e8bde8652c", per_page: 12 };

export const getImages = async (searchValue, page = 1) => {
    const data = await axios.get(BAZE_URL, {
        params: {
            q: searchValue,
            page: page
        }
});
    return data;
}