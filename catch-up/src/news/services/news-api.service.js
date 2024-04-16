import axios from "axios";

const http = axios.create({
    baseURL: "https://newsapi.org/v2/",
})

export class NewsApiService{
    apiKey = '758fe98fd55c4321b48340ed39e912cd';
    logoApi = new LogoApiService();

    getSources(){
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`)
    }

    getArticlesForSource(sourceId){
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source){
        return this.logoApi.getUrlToLogo(source);
    }
}