<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">What is a Terminal?</p>
    <p>A terminal is a software-based interface that provides access to a shell.</p>
  </InfoCard>

  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Why a Terminal?</p>
    <ol class="explanationPoints">
      <li><b>Efficiency:</b> Allows direct, text-based interaction with the operating system, enabling quick execution of commands and tasks.</li>
      <li><b>Flexibility:</b> Supports a wide range of operations, from system administration to software development, leveraging powerful command-line tools.</li>
      <li><b>Accessibility:</b> Provides a lightweight and universal interface across different platforms, suitable for both local and remote system management.</li>
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