<template>
<!--  <nav>-->
<!--    <router-link to="/">Chapter 1: Basics</router-link>-->
<!--    <router-link to="/"> Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
  <router-view />
</template>


<script setup lang="ts">

</script>

<style>
#app {
  max-width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //Farbcodes (dark to bright):
  //#000000 black
  //#0A4A4A darkxx
  //#0F7070 darkx
  //#139494 dark
  //#1EB3B3 mediumdark
  //#1DBDBD medium
  //#2CE4E4 mediumlight
  //#31FFFF light
  //#98FFFF lightx
  //#CCFFFF lightxx
  //#FFFFFF white
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
  color: #3192aa;
}

nav a.router-link-exact-active {
  color: #3192aa;
}

.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>