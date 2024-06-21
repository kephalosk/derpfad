<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading color">{{ heading }}</p>
    <ol class="explanationPoints color">
      <li><b>{{ explanationTitle1 }}</b>{{ explanationText1 }}</li>
      <li><b>{{ explanationTitle2 }}</b>{{ explanationText2 }}</li>
      <li><b>{{ explanationTitle3 }}</b>{{ explanationText3 }}</li>
    </ol>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
import {defineProps} from "vue/dist/vue";

const props = defineProps({
  conceptName: {
    type: String,
    required: true
  },
  buzzwords: {
    type: Array,
    required: true,
    validator(value: unknown): boolean {
      return Array.isArray(value) && value.every(item => typeof item === 'string');
    }
  },
  explanations: {
    type: Array,
    required: true,
    validator(value: unknown): boolean {
      return Array.isArray(value) && value.every(item => typeof item === 'string');
    }
  },
});

const heading: string = `Why ${props.conceptName}?`;

const explanationTitle1: string = `${props.buzzwords[0]}:`;
const explanationTitle2: string = `${props.buzzwords[1]}:`;
const explanationTitle3: string = `${props.buzzwords[2]}:`;

const explanationText1: string = ` ${props.explanations[0]}`;
const explanationText2: string = ` ${props.explanations[1]}`;
const explanationText3: string = ` ${props.explanations[2]}`;
</script>

<style scoped>
.explanationHeading {
  font-weight: bold;
  font-style: italic;
}
.explanationPoints {
  text-align: left;
}
.color {
  color: black;
}
</style>