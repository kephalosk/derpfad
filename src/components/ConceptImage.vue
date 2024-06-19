<template>
  <InfoCard>
    <img alt="Concept Image" :src="imageLink" class="conceptImage"/>
  </InfoCard>
</template>

<script setup lang="ts">
import { defineProps } from "vue/dist/vue";
import InfoCard from "@/components/InfoCard.vue";

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
  max-width: 100%;
  height: auto;
}
</style>