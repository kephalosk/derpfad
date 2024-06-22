<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Further Information:</p>
    <p class="bookinfo">
      <a href="https://www.amazon.com/NGINX-HTTP-Server-tutorials-real-life-ebook-dp-B0CTMHTFTS/dp/B0CTMHTFTS" target="_blank"><img alt="Cover Image" :src="imageReferenceWebServerOuiran" :style="{ width: '200px'}"/></a>
      <a href="https://www.amazon.com/NGINX-HTTP-Server-tutorials-real-life-ebook-dp-B0CTMHTFTS/dp/B0CTMHTFTS" target="_blank">Gabriel Ouiran: NGINX HTTP Server: Harness the power of NGINX</a>
    </p>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";

const imageReferenceWebServerOuiran: string = require('@/assets/cover/cover_webserver_ouiran.jpg');
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