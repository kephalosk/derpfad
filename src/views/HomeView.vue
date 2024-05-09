<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
<<<<<<< Updated upstream
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
=======
    <HomeComponent msg="Willkommen beim Pfad" />
>>>>>>> Stashed changes
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
<<<<<<< Updated upstream
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
=======
import HomeComponent from "@/components/HomeComponent.vue"; // @ is an alias to /src
>>>>>>> Stashed changes

export default defineComponent({
  name: "HomeView",
  components: {
<<<<<<< Updated upstream
    HelloWorld,
=======
    HomeComponent,
>>>>>>> Stashed changes
  },
});
</script>
