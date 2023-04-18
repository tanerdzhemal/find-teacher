<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register</router-link>
    </div>
    <ul></ul>
    List of Coaches
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters.dispatch['coaches/coaches'];
    },
  },
};
</script>

<style></style>
