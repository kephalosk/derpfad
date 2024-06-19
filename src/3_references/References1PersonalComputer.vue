<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Further Information:</p>
    <p class="bookinfo">
      <a href="https://www.amazon.com/Apple-MacBook-Laptop-12%E2%80%91core-18%E2%80%91core/dp/B0CM5KXB2B" target="_blank"><img alt="Cover Image" :src="imageCoverPersonalComputerApple" :style="{ width: '200px'}"/></a>
      <a href="https://www.amazon.com/Apple-MacBook-Laptop-12%E2%80%91core-18%E2%80%91core/dp/B0CM5KXB2B" target="_blank">Apple MacBook</a>
    </p>
    <p class="bookinfo">
      <a href="https://www.amazon.com/Microsoft-Surface-Laptop-Studio-Touchscreen/dp/B0CDK3H8XH" target="_blank"><img alt="Cover Image" :src="imageCoverPersonalComputerMicrosoft" :style="{ width: '200px'}"/></a>
      <a href="https://www.amazon.com/Microsoft-Surface-Laptop-Studio-Touchscreen/dp/B0CDK3H8XH" target="_blank">Microsoft Surface</a>
    </p>
    <p class="bookinfo">
      <a href="https://www.amazon.com/Lenovo-ThinkPad-Business-i7-1165G7-Fingerprint/dp/B0CHFVYMBC" target="_blank"><img alt="Cover Image" :src="imageCoverPersonalComputerLenovo" :style="{ width: '200px'}"/></a>
      <a href="https://www.amazon.com/Lenovo-ThinkPad-Business-i7-1165G7-Fingerprint/dp/B0CHFVYMBC" target="_blank">Lenovo ThinkPad</a>
    </p>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";

const imageCoverPersonalComputerApple: string = require('@/assets/cover_personalcomputer_apple.jpg');
const imageCoverPersonalComputerMicrosoft: string = require('@/assets/cover_personalcomputer_microsoft.jpg');
const imageCoverPersonalComputerLenovo: string = require('@/assets/icon_thinkpad.png');
</script>

<style scoped>
.bookinfo {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
}
.explanationHeading {
  font-weight: bold;
  font-style: italic;
}
</style>