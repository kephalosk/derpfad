<template>
  <div class="infocard">
    <div class="infocard-image">
      <img alt="Card image" src="../assets/icon_laptop.png" />
    </div>
    <div class="infocard-header">
      {{ title }}
    </div>
    <div class="infocard-description">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.infocard {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: inline-block;
}
.infocard-image {
}
.infocard-header {
}
.infocard-description {
  font-weight: bold;
}
</style>