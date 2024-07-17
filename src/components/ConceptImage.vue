<template>
  <ImageCard v-if="hasImage">
    <img alt="Concept Image" :src="imageLink" class="conceptImage"/>
  </ImageCard>
</template>

<script setup lang="ts">
import { defineProps } from "vue/dist/vue";
import ImageCard from "@/components/ImageCard.vue";
import InfoCard from "@/components/InfoCard.vue";

const props = defineProps({
  imageLink: {
    type: String,
    required: true
  },
});

const hasImage = !!props.imageLink;
</script>

<style scoped>
.conceptImage {
  width: 100%;
  height: auto;
}
</style>