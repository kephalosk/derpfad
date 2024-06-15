<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Project Folder?</p>
    <p>A Project Folder is a directory or folder containing files and resources related to a specific project.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Project Folder?</p>
    <ol class="explanationPoints">
      <li><b>Organization:</b> Helps keep project-related files and resources structured and easily accessible.</li>
      <li><b>Collaboration:</b> Facilitates teamwork by providing a centralized location for shared project materials.</li>
      <li><b>Versioning:</b> Simplifies version control and tracking changes to project components over time.</li>
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