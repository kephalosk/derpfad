<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomeComponent msg="Willkommen beim Pfad" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeComponent from "@/components/HomeComponent.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HomeComponent,
  },
});
</script>
