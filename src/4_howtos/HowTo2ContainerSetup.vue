<template>
  <h4 class="banner-heading">HowTo: Container Setup</h4>
  <InfoCard class="cardHowTo color">
    <ol>
      <li>Open a <b>Web Browser</b></li>
      <li>Open url: https://www.docker.com/products/docker-desktop/</li>
      <li>Download <b>Docker Desktop</b></li>
      <li>Install <b>Docker Desktop</b></li>
      <li>Start <b>Docker Desktop</b></li>
      <li>Open a <b>Word Processing Program</b></li>
      <li>Create a new file</li>
      <li>
        Paste in:
        <ScrollWindow>
          <pre><code>
            {{ basicDockerfile }}
          </code></pre>
        </ScrollWindow>
      </li>
      <li>Save the file without extensions as "<b>Dockerfile</b>" beneath your "<b>index.html</b>"</li>
      <li>Create a <b>Project Folder</b> with a custom project name for your Website.</li>
      <li>Move "<b>index.html</b>" and "<b>Dockerfile</b>" to the <b>Project Folder</b>.</li>
      <li>Open a <b>Terminal</b></li>
      <li>Change the directory with the <b>Shell Command cd</b> to your <b>Project Folder</b> ("<b>cd test</b>" goes to Subfolder with the name test) and "<b>cd ..</b>" goes one Folder up in the File System)</li>
      <li>
        Run the following Command with your custom username and Project name:
        <ScrollWindow>
          <pre><code>
            {{ dockerCommand1 }}
          </code></pre>
        </ScrollWindow>
      </li>
      <li>
        Run the following Command with your custom username and Project name:
        <ScrollWindow>
          <pre><code>
            {{ dockerCommand2 }}
          </code></pre>
        </ScrollWindow>
      </li>
      <li>Open a <b>Web Browser</b></li>

      <li>Open url: http://localhost/
        <InfoCard class="cardImage">
          <img alt="Cover Image" :src="resultDockerHTML" class="image"/>
        </InfoCard>
      </li>


      <li>Open url: https://hub.docker.com/</li>
      <li>Create a DockerHub Account</li>

      <li>Open a <b>Terminal</b></li>

      <li>
        Run:
        <ScrollWindow>
          <pre><code>
            {{ dockerCommand3 }}
          </code></pre>
        </ScrollWindow>
      </li>

      <li>
        Run:
        <ScrollWindow>
          <pre><code>
            {{ dockerCommand4 }}
          </code></pre>
        </ScrollWindow>
      </li>

      <li>
        Run:
        <ScrollWindow>
          <pre><code>
            {{ dockerCommand5 }}
          </code></pre>
        </ScrollWindow>
      </li>

      <li>
        Run:
        <ScrollWindow>
          <pre><code>
            {{ dockerCommand6 }}
          </code></pre>
        </ScrollWindow>
      </li>
      <li>Open a <b>Web Browser</b></li>

      <li>Open url: http://localhost:3001/
        <InfoCard class="cardImage">
          <img alt="Cover Image" :src="resultDockerHTML" class="image"/>
        </InfoCard>
      </li>
    </ol>
  </InfoCard>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
import ScrollWindow from "@/components/ScrollWindow.vue";

const resultDockerHTML: string = require('@/assets/results/result_docker_html.png');

const basicDockerfile: string = "\nFROM nginx:alpine" +
"\n" +
"\nCOPY index.html /usr/share/nginx/html/" +
"\n" +
"\nRUN chown nginx:nginx /usr/share/nginx/html/index.html" +
"\n" +
"\nEXPOSE 80"

const dockerCommand1 = "\ndocker build -t customusername/projectname .";
const dockerCommand2 = "\ndocker run -d -p 3000:80 customusername/projectname .";
const dockerCommand3 = "\ndocker images";
const dockerCommand4 = "\ndocker push customusername/projectname";
const dockerCommand5 = "\ndocker pull customusername/projectname:latest";
const dockerCommand6 = "\ndocker run -d -p 3001:80 customusername/projectname";
</script>

<style scoped>
.cardHowTo {
  text-align: left;
}
.codeView {
  display: flex;
  flex-direction: column;
}
.banner-heading {
  background: linear-gradient(to bottom right, #31ffff, #ffffff);
  color: #139494; /* Dark blue text */
  padding: 10px 0px; /* Adjust padding to your preference */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  display: inline-block; /* Ensures the background fits the text content */
  font-weight: bold; /* Make the text bold */
  text-align: center; /* Center-align the text */
  width: 100%;
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
.color {
  color: #0A4A4A;
}
</style>