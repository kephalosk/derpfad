<template>
  <h4>HowTo: Minimal Setup</h4>
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
.cardHowTo {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  text-align: left;
}
.codeView {
  display: flex;
  flex-direction: column;
}
</style>