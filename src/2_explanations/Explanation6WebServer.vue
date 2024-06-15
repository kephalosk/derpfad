<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Web Server?</p>
    <p>A Web Server is software that handles HTTP requests, serves web content and can manage websites.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Web Server?</p>
    <ol class="explanationPoints">
      <li><b>Content Delivery:</b> A Web Server delivers web pages and resources to users' browsers upon request.</li>
      <li><b>Resource Management:</b> It handles and manages multiple user requests efficiently, ensuring optimal performance and reliability.</li>
      <li><b>Security:</b> Provides security features such as HTTPS, access controls, and protection against common web threats.</li>
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