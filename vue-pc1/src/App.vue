<script>
import {ChuckNorrisApiService} from "./chucknorris/services/chucknorris-api.service.js";
import {Joke} from "./chucknorris/model/joke.entity.js";
import JokeList from "./chucknorris/components/joke-list.component.vue";
import FooterContent from "./chucknorris/public/components/footer-content.component.vue";

export default {
  name: 'App',
  components: {
    FooterContent,
    JokeList
  },
  data() {
    return {
      jokes: [],
      errors: [],
      chuckNorrisApi: new ChuckNorrisApiService()
    }
  },
  created() {
    this.chuckNorrisApi.getCategories()
        .then(response => {
          response.data.forEach(category => {
            this.getRandomJokeForCategory(category);
          });
        })
        .catch(error => {
          this.errors.push(error);
        });
  },
  methods: {
    buildJokesListFromResponseData(joke){
      return new Joke(joke.id, joke.value, joke.categories)
    },

    getRandomJokeForCategory(category){
      this.chuckNorrisApi.getRandomJokeForCategory(category)
          .then(response => {
            let joke = this.buildJokesListFromResponseData(response.data);
            this.jokes.push(joke);
            console.log(joke);
          })
          .catch(error => {
            this.errors.push(error)
          })
    },
  },
}
</script>

<template>
  <div class="w-full">
    <div>
      <pv-toolbar class="sticky bg-primary">
        <template #start>
          <p>ChuckNorris</p>
        </template>
        <template #end>

        </template>
      </pv-toolbar>
    </div>
  </div>
  <div>
    <joke-list :jokes="jokes" v-if="errors"/>
  </div>
  <footer-content/>
</template>

<style scoped>
</style>
