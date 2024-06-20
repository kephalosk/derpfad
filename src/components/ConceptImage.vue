<template>
  <ImageCard>
    <img alt="Concept Image" :src="imageLink" class="conceptImage"/>
  </ImageCard>
</template>

<script setup lang="ts">
import { defineProps } from "vue/dist/vue";
import ImageCard from "@/components/ImageCard.vue";

const props = defineProps({
  imageLink: {
    type: String,
    required: true
  },
});
</script>

<style scoped>
.conceptImage {
  width: 100%;
  height: auto;
}
</style>