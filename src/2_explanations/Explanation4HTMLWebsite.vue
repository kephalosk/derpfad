<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is HTML?</p>
    <p>HTML (HyperText Markup Language) is the standard markup language used to create and structure content on web pages.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why HTML?</p>
    <ol class="explanationPoints">
      <li><b>Foundation of Web Pages:</b> HTML is the fundamental building block of web pages.</li>
      <li><b>Standardized and Universally Supported:</b> As a standard maintained by the World Wide Web Consortium (W3C), HTML is universally supported by all web browsers.</li>
      <li><b>Easy to Learn and Use:</b> HTML is relatively simple to learn, with a clear and intuitive syntax.</li>
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