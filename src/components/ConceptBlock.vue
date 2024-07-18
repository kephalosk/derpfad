<template>
  <div class="conceptContainer">
    <h4 class="banner-heading">{{ concept.heading }}</h4>
    <ConceptImage :image-link="concept.image" :class="conceptImageClass"/>
    <Definition class="large" :concept-name="concept.name" :definition="concept.definition"/>
    <Explanation class="large" :concept-name="concept.name" :reason="concept.reason"/>
    <Sidenotes :sidenotes="concept.sidenotes"/>
    <References :details="concept.references" :country-code="countryCode" class="large"/>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Explanation from "@/components/Explanation.vue";
import References from "@/components/References.vue";
import ConceptImage from "@/components/ConceptImage.vue";
import Definition from "@/components/Definition.vue";
import Sidenotes from "@/components/Sidenotes.vue";

const props = defineProps({
  concept: {
    required: true
  },
  countryCode: {
    type: String,
    required: true
  },
  imageClass: {
    type: String,
    required: true
  },
});

const conceptImageClass = `conceptImage ${props.imageClass}`;

const separator = ": ";
</script>

<style scoped>
.banner-heading {
  background: linear-gradient(to bottom right, #31ffff, #ffffff);
  color: #139494; /* Dark blue text */
  padding: 10px 0px; /* Adjust padding to your preference */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  display: inline-block; /* Ensures the background fits the text content */
  font-weight: bold; /* Make the text bold */
  text-align: center; /* Center-align the text */
  width: 100%;
}
.conceptContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}
.conceptImage {
  max-width: 700px;
}
.extraSmall {
  max-width: 180px;
}
.small {
  max-width: 200px;
}
.mediumSmall {
  max-width: 240px;
}
.medium {
  max-width: 460px;
}
.large {
  max-width: 700px;
}
.extraLarge {
  max-width: 1000px;
}
</style>