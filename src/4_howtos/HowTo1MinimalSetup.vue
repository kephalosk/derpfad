<template>
  <h4 class="banner-heading">HowTo: Minimal Setup</h4>
  <InfoCard class="cardHowTo">
    <ol>
      <li>Open a <b>Word Processing Program</b>.</li>
      <li>Create a new file.</li>
      <li>
        Paste in:
        <ScrollWindow>
          <pre><code>
            {{ basicHTML }}
          </code></pre>
        </ScrollWindow>
      </li>
      <li>Save the file as <b>index.html</b> (only with .html extension)</li>
      <li>Open a <b>Web Browser</b>.</li>
      <li>
        Open <b>index.html</b> in the <b>Web Browser</b>.
        <p/>
        <ImageCard class="cardImage">
          <img alt="Cover Image" :src="resultHTML" class="image"/>
        </ImageCard></li>
    </ol>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
import ScrollWindow from "@/components/ScrollWindow.vue";
import ImageCard from "@/components/ImageCard.vue";

const resultHTML: string = require('@/assets/result_html.png');

const basicHTML: string = "\n<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <title>Easy Website Title</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "    <h1>Easy Website Heading</h1>\n" +
    "    <p>Easy Website Paragraph.</p>\n" +
    "</body>\n" +
    "</html>"
</script>

<style scoped>
.banner-heading {
  background: linear-gradient(to bottom right, #31ffff, #ffffff);
  color: #000066; /* Dark blue text */
  padding: 10px 0px; /* Adjust padding to your preference */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  display: inline-block; /* Ensures the background fits the text content */
  font-weight: bold; /* Make the text bold */
  text-align: center; /* Center-align the text */
  width: 100%;
}
.cardHowTo {
  text-align: left;
}
.codeView {
  display: flex;
  flex-direction: column;
}
.cardImage {
  padding: 15px 0px 9px 0px;
  max-width: 100%;
  width: fit-content;
}
.image {
  max-width: 500px;
  width: 100%;
  height: auto;
}
</style>