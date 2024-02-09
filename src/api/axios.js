import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "a91de73f3c332a387516eaa3079ec1a6",
        language: "ko-KR"
    }
})

export default instance;