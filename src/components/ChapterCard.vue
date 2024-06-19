<template>
  <div class="chaptercard">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.chaptercard {
  background: linear-gradient(to bottom right, #31ffff, #ffffff);
  border-radius: 10px;
  padding: 0px;
  margin: 0 40px 40px 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.chaptercard h2 {
  font-size: 2.5rem; /* Larger font size for headline */
  font-weight: bold; /* Bold font weight */
  color: #333; /* Dark text color */
  margin: 0; /* Remove default margin */
  text-transform: uppercase; /* Uppercase text */
}
</style>