<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">{{ heading }}</p>
    <p>{{ definition }}</p>
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
</style>