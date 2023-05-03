<template>
  <header>
    <nav>
      <h1><router-link to="/"> Find a Coach </router-link></h1>
    </nav>
    <ul>
      <li><router-link to="/coaches">Coaches</router-link></li>
      <li v-if="isLoggedIn">
        <router-link to="/requests">Requests</router-link>
      </li>
      <li v-else>
        <router-link to="/auth"> Login</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(39, 38, 90, 1) 0%,
    rgba(114, 114, 199, 1) 23%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #ffffff;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
