<script>
import ArticleCard from "./article-card.component.vue";

export default {
  name: "article-list",
  components: {ArticleCard},
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div v-for="article in articles">
    <article-card article="article"></article-card>
  </div>
</template>

<style scoped>

</style>