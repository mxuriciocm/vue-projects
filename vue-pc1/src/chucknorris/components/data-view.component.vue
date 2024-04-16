<script>
import {ChuckNorrisApiService} from "../services/chucknorris-api.service.js";
import PvDataView from "../../main.js";

export default {
  name: "data-view",
  components: {PvDataView},
  data(){
    return {
      errors: [],
      categories: [],
      chuckNorrisApi: new ChuckNorrisApiService()
    }
  },
  created(){
    this.chuckNorrisApi.getCategories()
      .then(response => {
        this.categories = response.data.categories;
      })
      .catch(error => {
        this.errors.push(error)
      });

  }
}

</script>
  <pv-data-view :data="categories">
    <div v-for="category in categories">
      <p>{{category}}</p>
    </div>
  </pv-data-view>
<template>

</template>

<style scoped>

</style>