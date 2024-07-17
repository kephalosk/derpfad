<template>
  <InfoCard class="cardExplanation" v-if="hasReferences">
    <p class="explanationHeading">{{ title }}</p>
    <p class="bookinfo" v-for="(item, index) in details" :key="index">
      <a class="color" :href="item.weblinks[countryCode]" target="_blank"><img class="bookCover" alt="Cover Image" :src="item.imageLink"/></a>
      <a class="color roundedButton"  :href="item.weblinks[countryCode]" target="_blank">{{ item.title }}</a>
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
            'weblinks' in item &&
            'imageLink' in item &&
            'title' in item &&
            typeof item.imageLink === 'string' &&
            typeof item.title === 'string' &&
            'US' in item.weblinks && typeof item.weblinks.US === 'string'&&
            'UK' in item.weblinks && typeof item.weblinks.UK === 'string'&&
            'DE' in item.weblinks && typeof item.weblinks.DE === 'string'&&
            'FR' in item.weblinks && typeof item.weblinks.FR === 'string'&&
            'JP' in item.weblinks && typeof item.weblinks.JP === 'string'&&
            'CA' in item.weblinks && typeof item.weblinks.CA === 'string'&&
            'IT' in item.weblinks && typeof item.weblinks.IT === 'string'&&
            'SP' in item.weblinks && typeof item.weblinks.SP === 'string'&&
            'AU' in item.weblinks && typeof item.weblinks.AU === 'string'&&
            'NL' in item.weblinks && typeof item.weblinks.NL === 'string'&&
            'SW' in item.weblinks && typeof item.weblinks.SW === 'string'&&
            'PL' in item.weblinks && typeof item.weblinks.PL === 'string'&&
            'BE' in item.weblinks && typeof item.weblinks.BE === 'string';
      });
    }
  },
  countryCode: {
    type: String,
    required: true,
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
  color: #0A4A4A;
}
.explanationHeading {
  font-weight: bold;
  font-style: italic;
  color: #0A4A4A;
}
.color {
  color: #0A4A4A;
}
.roundedButton {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #1EB3B3;
  color: #fff;
  text-decoration: none;
  border-radius: 1rem;
  transition: background-color 0.3s;
}

.roundedButton:hover {
  background-color: #0F7070;
}
</style>