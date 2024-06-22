<template>
  <h4>HowTo: Container Setup</h4>
  <InfoCard class="cardHowTo">
    <ol>
      <li>Open <b>Web Browser</b></li>
      <li>Go to: https://www.docker.com/products/docker-desktop/</li>
      <li>Install <b>Docker Desktop</b></li>
      <li>Start <b>Docker Desktop</b></li>
      <li>Open <b>Word Processing Program</b></li>
      <li>Create new file</li>
      <li>
        <div class="codeView">
          Paste in:
          <InfoCard class="cardCode">
                <pre><code>
                  {{ basicDockerfile }}
                </code></pre>
          </InfoCard>
        </div>
      </li>
      <li>Save file without extensions as "<b>Dockerfile</b>" beneath your "<b>index.html</b>"</li>
      <li>Create a <b>Project Folder</b> with a custom project name for your Website.</li>
      <li>Move "<b>index.html</b>" and "<b>Dockerfile</b>" in the <b>Project Folder</b>.</li>
      <li>Open <b>Terminal</b></li>
      <li>Change directory to the <b>Project Folder</b> with the commands "<b>ls</b>"(shows items of current folder) "<b>cd customprojectname</b>"(goes to Subfolder with the name customprojectname) and "<b>cd ..</b>"(goes one Folder up in the File System)</li>
      <li>Run: docker build -t customprojectname .</li>
      <li>Run: docker run -d -p 80:80 customprojectname</li>
      <li>Open <b>Web Browser</b></li>
      <li>Type in url searchbar: http://localhost/
        <InfoCard class="cardImage">
          <img alt="Cover Image" :src="resultDockerHTML" :style="{ width: '400px'}"/>
        </InfoCard>
      </li>
    </ol>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";

const resultDockerHTML: string = require('@/assets/results/result_docker_html.png');

const basicDockerfile: string = "\nFROM nginx:alpine" +
"\n" +
"\nCOPY index.html /usr/share/nginx/html/" +
"\n" +
"\nRUN chown nginx:nginx /usr/share/nginx/html/index.html" +
"\n" +
"\nEXPOSE 80"
</script>

<style scoped>
.cardHowTo {
  max-width: 700px;
  text-align: left;
}
.codeView {
  display: flex;
  flex-direction: column;
}
</style>