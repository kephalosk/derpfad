<template>
  <InfoCard class="cardNotes" v-if="hasSidenotes">
    <p class="NotesHeading color">{{ heading }}</p>
    <ul class="NotesPoints color" v-for="(item, index) in sidenotes" :key="index">
      <li>{{ item }}</li>
    </ul>
  </InfoCard>
</template>

<script setup lang="ts">
import { defineProps } from "vue/dist/vue";
import InfoCard from "@/components/InfoCard.vue";

const props = defineProps({
  sidenotes: {
    type: Array,
    required: true,
    validator(value: unknown): boolean {
      return Array.isArray(value) && value.every(item => typeof item === 'string');
    }
  }
});

const heading: string = 'Notes';

const hasSidenotes = props.sidenotes?.length;

</script>

<style scoped>
.NotesHeading {
  font-weight: bold;
  font-style: italic;
}
.NotesPoints {
  text-align: left;
}
.color {
  color: #0A4A4A;
}
</style>