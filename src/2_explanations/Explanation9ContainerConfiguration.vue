<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Container Configuration?</p>
    <p>A Container Configuration is a script that defines the instructions for building a Container Image, specifying the base image, dependencies, and commands to run.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Container Configuration?</p>
    <ol class="explanationPoints">
      <li><b>Automation:</b> Streamlines the process of building container images by automating setup and configuration.</li>
      <li><b>Reproducibility:</b> Ensures consistent and repeatable builds of container environments across different systems.</li>
      <li><b>Version Control:</b> Facilitates versioning and sharing of environment configurations, enhancing collaboration and tracking changes.</li>
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