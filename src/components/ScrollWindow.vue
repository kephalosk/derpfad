<template>
  <div class="scroll-container">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.scroll-container {
  width: 95%;
  overflow-x: auto;
  background: radial-gradient(circle at left, rgba(255, 255, 255, 0.8), rgba(49, 255, 255, 0.5));
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0px 0px 0px 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>