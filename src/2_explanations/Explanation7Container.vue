<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Container?</p>
    <p>A Container is a lightweight, portable, and self-sufficient environment that encapsulates an application and its dependencies.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Container?</p>
    <ol class="explanationPoints">
      <li><b>Portability:</b> Containers ensure that applications run consistently across various environments.</li>
      <li><b>Efficiency:</b> They use system resources more effectively by sharing the host OS kernel.</li>
      <li><b>Isolation:</b> Containers provide a secure and isolated environment for applications, reducing conflicts and enhancing security.</li>
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