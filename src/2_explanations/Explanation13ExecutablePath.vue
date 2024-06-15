<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is an Executable Path?</p>
    <p>An Executable Path is the specific location within a file system where an executable file or program is stored and can be directly executed by the operating system.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why an Executable Path?</p>
    <ol class="explanationPoints">
      <li><b>Access and Execution:</b> It specifies where the operating system can find and run a program or script.</li>
      <li><b>Automation:</b> Allows scripts and applications to be invoked easily by specifying their location.</li>
      <li><b>Environment Management:</b> Helps manage different versions of programs and ensures correct dependencies are used.</li>
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