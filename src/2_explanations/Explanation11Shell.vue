<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Shell?</p>
    <p>A Shell is a command-line interface (CLI) program that interprets user commands and executes them by interacting with the operating system's kernel.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Shell?</p>
    <ol class="explanationPoints">
      <li><b>Command Execution:</b> Allows users to interact with the operating system by executing commands and scripts.</li>
      <li><b>Automation:</b> Facilitates task automation through scripting, improving efficiency in repetitive tasks.</li>
      <li><b>Customization:</b> Offers customization through configuration files and plugins, tailoring the user experience and enhancing productivity.</li>
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