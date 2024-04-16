import axios from "axios";

const http = axios.create({
    baseURL: "https://api.chucknorris.io/jokes/",
});
export class ChuckNorrisApiService {
    getCategories() {
        return http.get('categories');
    }
    getRandomJokeForCategory(category){
        return http.get(`random?category=${category}`);
    }
}