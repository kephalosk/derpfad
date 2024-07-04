<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading color">{{ heading }}</p>
    <p class="color">{{ definition }}</p>
  </InfoCard>
</template>

<script setup lang="ts">
import { defineProps } from "vue/dist/vue";
import InfoCard from "@/components/InfoCard.vue";

const props = defineProps({
  conceptName: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  }
});

const heading: string = `What is ${props.conceptName}?`;
</script>

<style scoped>
.explanationHeading {
  font-weight: bold;
  font-style: italic;
}
.color {
  color: #0F7070;
}
</style>