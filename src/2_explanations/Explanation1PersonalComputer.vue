<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Personal Computer?</p>
    <p>A Personal Computer is a machine used by web developers for web development, enabling them to write, test, and manage code locally.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Personal Computer?</p>
    <ol class="explanationPoints">
      <li><b>Accessibility and Convenience:</b> Personal computers provide immediate access to development tools and resources, allowing developers to work from anywhere with ease.</li>
      <li><b>Customization and Control:</b> Developers can customize their personal computers with preferred software, settings, and configurations tailored to their specific needs and workflows.</li>
      <li><b>Cost-Effectiveness:</b> Using a personal computer eliminates the need for expensive server infrastructure for development and testing, making it a cost-effective solution for web development tasks.</li>
    </ol>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
</script>

<style scoped>
.explanationHeading {
  font-weight: bold;
  font-style: italic;
}
.explanationPoints {
  text-align: left;
}
</style>