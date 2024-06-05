<template>
  <div class="arrow-icon">
    <div class="label">{{ label }}</div>
    <img src="../assets/icon_arrow_right.svg" alt="Arrow" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: String
});
</script>

<style scoped>
.arrow-icon {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  font-weight: bold;
}
</style>