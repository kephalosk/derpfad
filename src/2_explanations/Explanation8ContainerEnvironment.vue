<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Container Environment?</p>
    <p>A Container Environment is a software platform that enables users to create, manage, and run containers on their local machine.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Container Environment?</p>
    <ol class="explanationPoints">
      <li><b>Ease of Development:</b> Simplifies creating, managing, and testing containerized applications locally.</li>
      <li><b>Consistency:</b> Ensures a consistent development environment across different machines and setups.</li>
      <li><b>Integration:</b> Provides tools and interfaces for seamless integration with other development and deployment workflows.</li>
    </ol>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
</script>

<style scoped>
.cardExplanation {
  width: 700px;
}
.explanationHeading {
  font-weight: bold;
  font-style: italic;
}
.explanationPoints {
  text-align: left;
}
</style>