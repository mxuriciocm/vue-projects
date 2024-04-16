<script>
import JokeCard from "./joke-card.component.vue";

export default {
  name: "joke-list",
  components: {JokeCard},
  props: {
    jokes: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div v-for="joke in jokes">
    <joke-card :joke="joke"/>
  </div>
</template>

<style scoped>

</style>