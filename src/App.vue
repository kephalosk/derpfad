<template>
  <section>
    <h1>The Easy Path To Master Web Development</h1>
    <p>
      Easy Web Path provides a step-by-step overview of core concepts in web
      development and how they interact.
    </p>
  </section>
  <nav>
    <router-link to="/">Chapter 1: Basics</router-link>
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


h1 {
  font-size: 34px;
  font-weight: bold;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
</script>