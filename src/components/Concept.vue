<template>
  <div class="concept">
    <img alt="Concept Icon" :src="icon" :style="{ height: size }"/>
    <div class="conceptRepresenter">
      {{ representer }}
    </div>
    <div class="conceptName">
      {{ name }}
    </div></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  representer: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: false,
    default: '100px'
  }
});

const separator = ": ";
</script>

<style scoped>
.concept {
  padding: 10px 5px 0px 5px;
}
.conceptName {
  font-weight: bold;
}
</style>