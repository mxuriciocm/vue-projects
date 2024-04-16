<script>
import {RestCountriesApiService} from "./countries/services/restcountries-api.service.js";
import FooterContent from "./countries/public/components/footer-content.component.vue";
import CountryCard from "./countries/components/country-card.component.vue";
import {Country} from "./countries/model/country.entity.js";

export default {
  name: "App",
  components: {CountryCard, FooterContent},
  data(){
    return {
      country: null,
      restCountriesApi: new RestCountriesApiService()
    }
  },
  created(){
    this.getRelevantDataForCountry('Peru');
  },
  methods:{
    getRelevantDataForCountry(countryName){
      this.restCountriesApi.getRelevantDataForCountry(countryName)
          .then(response => {
            const data = response.data[0];
            this.country = new Country(data);
          })
          .catch(error => {
            console.error('Error al conectarse a la API:', error);
          });
    }
  }
}
</script>

<template>
  <div class="flex flex-column">
    <pv-toolbar class="sticky bg-primary">
      <template #center>
        <p>About Peru</p>
      </template>
    </pv-toolbar>

    <country-card :country="country"></country-card>

    <footer-content></footer-content>
  </div>
</template>


<style scoped>
</style>