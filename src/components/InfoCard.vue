<template>
  <div class="infocard">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.infocard {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px 10px 15px;
  margin: 20px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: inline-block;
}
</style>