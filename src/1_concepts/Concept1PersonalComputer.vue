<template>
  <InfoCard class="cardPersonalComputer">
    <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
  </InfoCard>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Concept from "@/components/Concept.vue";
import InfoCard from "@/components/InfoCard.vue";

const props = defineProps({
  iconLaptop: {
    type: String,
    required: true
  },
  personalComputer: {
    type: String,
    required: true
  }
});

const separator = ": ";
</script>

<style scoped>
.concept {
  padding: 10px 5px 0px 5px;
}
.conceptName {
  font-weight: bold;
}
</style>