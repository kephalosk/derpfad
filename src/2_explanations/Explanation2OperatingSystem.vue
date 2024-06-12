<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is an Operating System?</p>
    <p>An operating system is software that manages a computer's hardware and provides common services for computer programs.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why an Operating System?</p>
    <ol class="explanationPoints">
      <li><b>Resource Management:</b> An Operating System efficiently manages and allocates hardware resources such as CPU, memory, and storage to various applications.</li>
      <li><b>User Interface:</b> It provides a user interface, enabling users to interact with the computer through graphical or command-line interfaces.</li>
      <li><b>Security and Stability:</b> The operating system ensures security by controlling access to resources and maintains system stability by managing processes and preventing conflicts.</li>
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