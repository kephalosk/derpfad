<template>
  <InfoCard class="cardExplanation">
    <p class="explanationHeading">Further Information:</p>
    <p class="bookinfo">
      <a href="https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189" target="_blank"><img alt="Cover Image" :src="imageReferenceHtmlDuckett" :style="{ width: '200px'}"/></a>
      <a href="https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189" target="_blank">Jon Duckett: HTML and CSS: Design and Build Websites</a>
    </p>
    <p class="bookinfo">
      <a href="https://www.amazon.com/HTML-easy-steps-Mike-McGrath/dp/1840788763" target="_blank"><img alt="Cover Image" :src="imageReferenceHtmlMcgrath" :style="{ width: '200px'}"/></a>
      <a href="https://www.amazon.com/HTML-easy-steps-Mike-McGrath/dp/1840788763" target="_blank">Mike Mcgrath: HTML in Easy Steps</a>
    </p>
    <p class="bookinfo">
      <a href="https://www.amazon.com/Head-First-HTML-CSS-Standards-Based/dp/0596159900" target="_blank"><img alt="Cover Image" :src="imageReferenceHtmlRobsen" :style="{ width: '200px'}"/></a>
      <a href="https://www.amazon.com/Head-First-HTML-CSS-Standards-Based/dp/0596159900" target="_blank">Elisabeth Robson, Eric Freeman: Head First HTML and CSS: A Learner's Guide to Creating Standards-Based Web Pages</a>
    </p>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";

const imageReferenceHtmlDuckett: string = require('@/assets/cover/cover_html_duckett.jpg');
const imageReferenceHtmlMcgrath: string = require('@/assets/cover/cover_html_mcgrath.jpg');
const imageReferenceHtmlRobsen: string = require('@/assets/cover/cover_html_robsen.jpg');
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