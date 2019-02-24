<template lang="html">
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li
        v-for="cat in categories"
        :key="cat"
      >
        {{ cat }}
      </li>
    </ul>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapGetters(['getTodoById']),
    // catLength() {
    //   return this.$store.getters.catLength
    // },
    ...mapState(['user', 'categories']),
  }
}
</script>

<style lang="css" scoped>
</style>
