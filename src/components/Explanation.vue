<template>
  <InfoCard class="cardExplanation" v-if="hasExplanation">
    <p class="explanationHeading color">{{ heading }}</p>
    <ul class="explanationPoints color" v-for="(item, index) in reason" :key="index">
      <li><b>{{ item.buzzword }}: </b>{{ item.explanation }}</li>
    </ul>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
import {defineProps} from "vue/dist/vue";
import {getIndefiniteArticle} from "@/globals/language/GetIndefiniteArticle";
import {ReferenceDetails} from "@/globals/Types/ReferenceDetails";
import {ConceptReason} from "@/globals/Types/ConceptReason";

const props = defineProps({
  conceptName: {
    type: String,
    required: true
  },
  reason: {
    type: Array as () => ConceptReason[],
    required: true,
    validator(value: unknown): boolean {
      return Array.isArray(value) && value.every(item => {
        return typeof item === 'object' &&
            'buzzword' in item &&
            'explanation' in item &&
            typeof item.buzzword === 'string' &&
            typeof item.explanation === 'string';
      });
    }
  },
});

const hasExplanation = props.reason?.length;

const article = getIndefiniteArticle(props.conceptName);

const heading: string = `Why ${article} ${props.conceptName}?`;
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
  color: #0A4A4A;
}
</style>