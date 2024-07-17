<template>
  <InfoCard class="cardExplanation" v-if="hasDefinition">
    <p class="definitionHeading color">{{ heading }}</p>
    <ul class="definitionPoints color" v-for="(item, index) in definition" :key="index">
      <li>{{ item }}</li>
    </ul>
  </InfoCard>
</template>

<script setup lang="ts">
import { defineProps } from "vue/dist/vue";
import InfoCard from "@/components/InfoCard.vue";
import {getIndefiniteArticle} from "@/globals/language/GetIndefiniteArticle";

const props = defineProps({
  conceptName: {
    type: String,
    required: true
  },
  definition: {
    type: Array,
    required: true,
    validator(value: unknown): boolean {
      return Array.isArray(value) && value.every(item => typeof item === 'string');
    }
  }
});

const hasDefinition = props.definition?.length;

const article = getIndefiniteArticle(props.conceptName);

const heading: string = `What is ${article} ${props.conceptName}?`;

</script>

<style scoped>
.definitionHeading {
  font-weight: bold;
  font-style: italic;
}
.definitionPoints {
  text-align: left;
}
.color {
  color: #0A4A4A;
}
</style>