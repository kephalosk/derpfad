<template>
  <div class="imagecard">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.imagecard {
  background: radial-gradient(circle at left, rgba(255, 255, 255, 0.8), rgba(49, 255, 255, 0.5));
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px 0px 9px 0px;
  margin: 15px 0px 15px 0px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 100%;
}
</style>