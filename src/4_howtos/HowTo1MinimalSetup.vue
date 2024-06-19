<template>
  <h4 class="banner-heading">HowTo: Minimal Setup</h4>
  <InfoCard class="cardHowTo">
    <ol>
      <li>Open <b>Word Processing Program</b>.</li>
      <li>Create new file.</li>
      <li>
        <div class="codeView">
          Paste in:
          <InfoCard class="cardCode">
                <pre><code>
                  {{ basicHTML }}
                </code></pre>
          </InfoCard>
        </div>
      </li>
      <li>Save file as <b>index.html</b> (only with .html extension)</li>
      <li>Open <b>Web Browser</b>.</li>
      <li>
        Open <b>index.html</b> in <b>Web Browser</b>.
        <p/>
        <InfoCard class="cardImage">
          <img alt="Cover Image" :src="resultHTML" :style="{ width: '400px'}"/>
        </InfoCard></li>
    </ol>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";

const resultHTML: string = require('@/assets/result_html.png');

const basicHTML: string = "\n<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <title>My Easy Website Title</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "    <h1>My Easy Website Heading</h1>\n" +
    "    <p>My Easy Website Paragraph.</p>\n" +
    "</body>\n" +
    "</html>"
</script>

<style scoped>
.banner-heading {
  background: linear-gradient(to bottom right, #31ffff, #ffffff);
  color: #000066; /* Dark blue text */
  padding: 10px 20px; /* Adjust padding to your preference */
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
</style>