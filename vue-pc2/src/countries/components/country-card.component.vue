<script>
import {Country} from "../model/country.entity.js";

export default {
  name: "country-card",
  props: {
    country: {
      type: Country,
      required: true
    }
  }
}
</script>

<template>
  <pv-card style="width:30rem; display:flex; align-items:center; justify-content: center; margin-top: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
    <template #header>
      <img class = "w-10rem" alt="flag image" :src="country.flagImage" />
    </template>
    <template #title>Nombre del pais: {{ country.name }}</template>
    <template #subtitle> Nombre oficial: {{country.oficialName}}</template>
    <template #content>
      <p class="m-0">Currency: {{ country.currency}}</p>
      <p class="m-0">Capital: {{ country.capital }}</p>
      <p class="m-0">Population: {{ country.population }}</p>
      <p class="m-0">Area: {{ country.area }} km²</p>
      <p class="m-0">Region: {{ country.region }}</p>
      <p class="m-0">Subregion: {{ country.subregion }}</p>
      <p class="m-0">Languages: {{ country.languages }}</p>
    </template>
    <template #footer>
      <img class="w-5rem flex" alt="coat image" :src="country.coatOfArmsImage"/>
    </template>
  </pv-card>
</template>

<style scoped>

</style>