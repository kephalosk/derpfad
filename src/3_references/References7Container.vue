<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Further Information:</p>
    <p class="bookinfo">
      <a href="https://www.amazon.com/Docker-Deep-Dive-Nigel-Poulton-ebook/dp/B01LXWQUFF" target="_blank"><img alt="Cover Image" :src="imageReferenceContainerPoulton" :style="{ width: '200px'}"/></a>
      <a href="https://www.amazon.com/Docker-Deep-Dive-Nigel-Poulton-ebook/dp/B01LXWQUFF" target="_blank">Nigel Poulton: Docker Deep Dive: Zero to Docker in a single book</a>
    </p>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";

const imageReferenceContainerPoulton: string = require('@/assets/cover_container_poulton.jpg');
</script>

<style scoped>
.bookinfo {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
}
.cardExplanation {
  width: 700px;
}
.explanationHeading {
  font-weight: bold;
  font-style: italic;
}
</style>