<template>
  <InfoCard class="cardExplanation" v-if="hasReferences">
    <p class="explanationHeading">{{ title }}</p>
    <p class="bookinfo" v-for="(item, index) in details" :key="index">
      <a :href="item.weblink" target="_blank"><img class="bookCover" alt="Cover Image" :src="item.imageLink"/></a>
      <a :href="item.weblink" target="_blank">{{ item.title }}</a>
    </p>
  </InfoCard>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import InfoCard from "@/components/InfoCard.vue";
import { ReferenceDetails } from "@/globals/Types/ReferenceDetails";

const props = defineProps({
  details: {
    type: Array as () => ReferenceDetails[],
    required: true,
    validator(value: unknown): boolean {
      return Array.isArray(value) && value.every(item => {
        return typeof item === 'object' &&
            'weblink' in item &&
            'imageLink' in item &&
            'title' in item &&
            typeof item.weblink === 'string' &&
            typeof item.imageLink === 'string' &&
            typeof item.title === 'string';
      });
    }
  }
});

const hasReferences = props.details?.length;

const title = 'Further Information:';
</script>

<style scoped>
.bookCover {
  width: 200px;
}
.bookinfo {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
}
.explanationHeading {
  font-weight: bold;
  font-style: italic;
  color: black;
}
</style>