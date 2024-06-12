<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Word Processing Program?</p>
    <p>A word processing program is software that allows users to create, edit, format, and print text documents.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Word Processing Program?</p>
    <ol class="explanationPoints">
      <li><b>Code Structuring:</b> ord processing programs aid developers in organizing code snippets and files.</li>
      <li><b>Documentation:</b> They assist in creating and maintaining project documentation.</li>
      <li><b>Content Planning:</b> These programs help in outlining website content, facilitating the planning and organization of information before implementation.</li>
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