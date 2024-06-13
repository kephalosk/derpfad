<template>
  <InfoCard class="cardPersonalComputer">
    <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
    <InfoCard class="cardOperatingSystem">
      <Concept :icon="iconOS" :representer="operatingSystem" name="Operating System"/>
      <section class="cardRow">
        <Concept :icon="iconTextEditor" :representer="textEditor" name="Word Processing Program"/>
        <ArrowIconRight label="create"/>
        <div class="cardColumn">
          <Concept :icon="iconHTML" representer="index.html" name="HTML-Website"/>
          <Concept :icon="iconDockerfile" representer="Dockerfile" name="Container Configuration"/>
        </div>
        <ArrowIconRight label="build in"/>
        <div class="cardColumn">
          <InfoCard class="cardOperatingSystem">
            <Concept :icon="iconDocker" representer="Docker" name="Container"/>
            <InfoCard class="cardOperatingSystem">
              <Concept :icon="iconNginx" representer="NGINX" name="Web Server"/>
              <section class="cardRow">
                <Concept :icon="iconHTML" representer="index.html" name="HTML-Website"/>
              </section>
            </InfoCard>
          </InfoCard>
          <arrow-icon-up label="run container"/>
          <Concept :icon="iconDockerDesktop" representer="Docker Desktop" name="Container Environment"/>
        </div>
        <ArrowIconRight label="called from"/>
        <Concept :icon="iconChrome" representer="Chrome" name="Web Browser"/>
      </section>
    </InfoCard>
  </InfoCard>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Concept from "@/components/Concept.vue";
import InfoCard from "@/components/InfoCard.vue";
import ArrowIconRight from "@/components/ArrowIconRight.vue";
import ArrowIconUp from "@/components/ArrowIconUp.vue";

const props = defineProps({
  iconLaptop: {
    type: String,
    required: true
  },
  personalComputer: {
    type: String,
    required: true
  },
  iconOS: {
    type: String,
    required: true
  },
  operatingSystem: {
    type: String,
    required: true
  },
  iconTextEditor: {
    type: String,
    required: true
  },
  textEditor: {
    type: String,
    required: true
  },
});

const iconHTML: string = require('@/assets/icon_document_html.png');
const iconChrome: string = require('@/assets/icon_chrome.png');
const iconNginx: string = require('@/assets/icon_nginx.png');
const iconDocker: string = require('@/assets/icon_docker.png');
const iconDockerDesktop: string = require('@/assets/icon_docker_desktop.png');
const iconDockerfile: string = require('@/assets/icon_dockerfile.png');
</script>

<style scoped>
.cardRow {
  display: flex;
  flex-direction: row;
}
.cardColumn {
  display: flex;
  flex-direction: column;
}
</style>