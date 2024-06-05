<template>
  <div>
    <select :value="selected" id="options" @change="handleChange">
      <slot></slot>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['optionSelected']);
const props = defineProps<{ selected: string }>();
const handleChange = (event: MouseEvent) => {
  const target = event.target as HTMLSelectElement;
  const selectedOption = (target && target.value) ? target.value : "macos";
  emit('optionSelected', selectedOption);
};
</script>

<style scoped>
</style>
