<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomeComponent msg="Welcome to the Easy Web Path" />
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
