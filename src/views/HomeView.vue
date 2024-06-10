<template>
  <div class="home">
    <Lesson1/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Lesson1 from "@/lessons/Lesson1.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    Lesson1,
  },
});
</script>
