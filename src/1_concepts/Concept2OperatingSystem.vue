<template>
  <InfoCard class="cardPersonalComputer">
    <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
    <Concept :icon="iconOS" :representer="operatingSystem" name="Operating System"/>
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
  },
  iconOS: {
    type: String,
    required: true
  },
  operatingSystem: {
    type: String,
    required: true
  },
});
</script>

<style scoped>
.concept {
  padding: 10px 5px 0px 5px;
}
.conceptName {
  font-weight: bold;
}
</style>