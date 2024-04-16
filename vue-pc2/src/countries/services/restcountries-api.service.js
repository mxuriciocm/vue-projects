import axios from "axios";

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1/name/'
})

export class RestCountriesApiService{
    getRelevantDataForCountry(country){
        return http.get(`${country}`);
    }
}