<script>
import {Joke} from "../model/joke.entity.js";

export default {
  name: "joke-card",
  props: {
    joke:{
      type: Joke,
      required: true
    }
  }
}
</script>

<template>
  <pv-card>
    <template #title><h1 class="flex align-content-start flex-wrap mt-4">This is a joke of category: {{joke.category}}</h1></template>
    <template #content>
      <p class="flex align-content-start flex-wrap mt-4">{{joke.value}}</p>
    </template>
    <template #footer>
      <p class="flex align-content-start flex-wrap mt-4">{{joke.jokeId}}</p>
    </template>
  </pv-card>
</template>

<style scoped>

</style>