<template>
  <InfoCard class="cardPersonalComputer">
    <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
    <InfoCard class="cardOperatingSystem">
      <Concept :icon="iconOS" :representer="operatingSystem" name="Operating System"/>
      <section class="cardRow">
        <Concept :icon="iconTextEditor" :representer="textEditor" name="Word Processing Program"/>
        <ArrowIcon label="create"/>
        <Concept :icon="iconHTML" representer="index.html" name="HTML-Website"/>
        <ArrowIcon label="open in"/>
        <Concept :icon="iconChrome" representer="Chrome" name="Web Browser"/>
      </section>
    </InfoCard>
  </InfoCard>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Concept from "@/components/Concept.vue";
import InfoCard from "@/components/InfoCard.vue";
import ArrowIcon from "@/components/ArrowIconRight.vue";

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
  iconTextEditor: {
    type: String,
    required: true
  },
  textEditor: {
    type: String,
    required: true
  },
});

const iconHTML: string = require('@/assets/icon_document_html.png');
const iconChrome: string = require('@/assets/icon_chrome.png');
</script>

<style scoped>
.cardRow {
  display: flex;
  flex-direction: row;
}
</style>