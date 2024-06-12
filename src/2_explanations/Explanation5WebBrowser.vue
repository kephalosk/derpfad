<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Web Browser?</p>
    <p>A web browser is software used to access and view content on the World Wide Web.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Web Browser?</p>
    <ol class="explanationPoints">
      <li><b>Local Development:</b> Web browsers support local development by rendering and previewing web pages and applications stored on a developer's computer.</li>
      <li><b>Interactivity and Functionality:</b> They provide features such as tabbed browsing, bookmarking, and extensions, enhancing user experience and enabling interaction with web content.</li>
      <li><b>Compatibility Testing:</b> Developers use web browsers to test and debug websites and web applications, ensuring compatibility and functionality across different platforms and devices.</li>
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