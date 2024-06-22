<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Further Information:</p>
    <p class="bookinfo">
      <a href="https://www.amazon.com/Learning-bash-Shell-Programming-Nutshell-ebook/dp/B0043GXMSY" target="_blank"><img alt="Cover Image" :src="imageReferenceShellNewham" :style="{ width: '200px'}"/></a>
      <a href="https://www.amazon.com/Learning-bash-Shell-Programming-Nutshell-ebook/dp/B0043GXMSY" target="_blank">Cameron Newham: Learning the bash Shell: Unix Shell Programming</a>
    </p>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";

const imageReferenceShellNewham: string = require('@/assets/cover/cover_shell_newham.jpg');
</script>

<style scoped>
.bookinfo {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
}
.cardExplanation {
  width: 700px;
}
.explanationHeading {
  font-weight: bold;
  font-style: italic;
}
</style>