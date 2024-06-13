<template>
  <div class="arrow-icon">
    <img class="arrow" src="../assets/icon_arrow_up.svg" alt="Arrow" />
    <div class="label">{{ label }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: String
});
</script>

<style scoped>
.arrow {
  width: 100px;
  height: 100px;
}
.arrow-icon {
  display: flex;
  flex-direction: row;
  font-weight: bold;
}
.label {
  padding-top: 40px;
}
</style>