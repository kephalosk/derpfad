<template>
  <section class="pathline">
    <p>
      <ChapterDropDown class="chapter" :selected="selectedChapter" defaultValue="chapter1" @optionSelected="handleChapterChange">
        <option value="chapter1">Chapter 1: Basics</option>
      </ChapterDropDown>
    </p>

    <p>
      <LessonDropDown :selected="selectedLesson" defaultValue="lesson2" @optionSelected="handleLessonChange">
        <option value="lesson1">Lesson 1: Minimal Setup</option>
        <option value="lesson2">Lesson 2: Container Setup</option>
        <option value="lesson3">Lesson 3: Kubernetes Setup</option>
      </LessonDropDown>
    </p>

    <ConceptBlock :concept="concept24ServerDigitalOcean" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept25CloudServiceProvider" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept26ContainerRegistryDigitalOcean" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept27KubernetesCluster" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept28WorkerNode" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept29MasterNode" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept30ServiceNetwork" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept31Loadbalancer" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept32ServerKubernetes" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept33CommandLineInterfaceKubectl" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept34PointerKubectl" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept35HomebrewBinariesDirectory" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept36CommandLineInterfaceDoctl" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept37PointerDoctl" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept38KubernetesAuthentification" :countryCode="countryCode"/>

    <ConceptBlock :concept="concept39KubernetesDashboard" :countryCode="countryCode"/>

    <how-to2-container-setup/>
  </section>

  <a href="https://a.check24.net/misc/click.php?pid=305756&aid=330&cat=13" target="_blank"><img src="https://a.check24.net/misc/view.php?pid=305756&aid=330&cat=13" width="300" height="600" style="max-width: 100%; height: auto;" ></a>
</template>

<script setup lang="ts">
import LessonDropDown from "@/components/LessonDropDown.vue";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import lesson3 from "@/0_lessons/Lesson3.vue";
import ChapterDropDown from "@/components/ChapterDropDown.vue";
import {getCountryCode} from "@/globals/localization/GetCountryCode";
import ConceptBlock from "@/components/ConceptBlock.vue";
import {concept6Router} from "@/1_content/lesson2/concept6Router";
import {concept7WideAreaNetwork} from "@/1_content/lesson2/concept7WideAreaNetwork";
import {concept8InternetProvider} from "@/1_content/lesson2/concept8InternetProvider";
import {concept9WorldWideWeb} from "@/1_content/lesson2/concept9WorldWideWeb";
import {concept10Server} from "@/1_content/lesson2/concept10Server";
import {concept11ContainerEnvironment} from "@/1_content/lesson2/concept11ContainerEnvironment";
import {concept12CommandLineInterface} from "@/1_content/lesson2/concept12CommandLineInterface";
import {concept13ContainerRegistry} from "@/1_content/lesson2/concept13ContainerRegistry";
import {concept14Shell} from "@/1_content/lesson2/concept14Shell";
import {concept15Terminal} from "@/1_content/lesson2/concept15Terminal";
import {concept16SystemBinariesDirectory} from "@/1_content/lesson2/concept16SystemBinariesDirectory";
import {concept17ShellCommand} from "@/1_content/lesson2/concept17ShellCommand";
import {concept18CustomBinariesDirectory} from "@/1_content/lesson2/concept18CustomBinariesDirectory";
import {concept19Pointer} from "@/1_content/lesson2/concept19Pointer";
import {concept20DockerConfiguration} from "@/1_content/lesson2/concept20DockerConfiguration";
import {concept21ProjectFolder} from "@/1_content/lesson2/concept21ProjectFolder";
import {concept22Container} from "@/1_content/lesson2/concept22Container";
import {concept23WebServer} from "@/1_content/lesson2/concept23WebServer";
import HowTo2ContainerSetup from "@/4_howtos/HowTo2ContainerSetup.vue";
import {concept24ServerDigitalOcean} from "@/1_content/lesson3/concept24ServerDigitalOcean";
import {concept25CloudServiceProvider} from "@/1_content/lesson3/concept25CloudServiceProvider";
import {concept26ContainerRegistryDigitalOcean} from "@/1_content/lesson3/concept26ContainerRegistryDigitalOcean";
import {concept27KubernetesCluster} from "@/1_content/lesson3/concept27KubernetesCluster";
import {concept28WorkerNode} from "@/1_content/lesson3/concept28WorkerNode";
import {concept29MasterNode} from "@/1_content/lesson3/concept29MasterNode";
import {concept30ServiceNetwork} from "@/1_content/lesson3/concept30ServiceNetwork";
import {concept31Loadbalancer} from "@/1_content/lesson3/concept31Loadbalancer";
import {concept32ServerKubernetes} from "@/1_content/lesson3/concept32ServerKubernetesIo";
import {concept33CommandLineInterfaceKubectl} from "@/1_content/lesson3/concept33CommandLineInterfaceKubectl";
import {concept34PointerKubectl} from "@/1_content/lesson3/concept34PointerKubectl";
import {concept35HomebrewBinariesDirectory} from "@/1_content/lesson3/concept35HomebrewBinariesDirectory";
import {concept36CommandLineInterfaceDoctl} from "@/1_content/lesson3/concept36CommandLineInterfaceDoctl";
import {concept37PointerDoctl} from "@/1_content/lesson3/concept37PointerDoctl";
import {concept38KubernetesAuthentification} from "@/1_content/lesson3/concept38KubernetesAuthentification";
import {concept39KubernetesDashboard} from "@/1_content/lesson3/concept39KubernetesDashboard";

const router = useRouter();

const selectedChapter = ref('chapter1');
const selectedLesson = ref('lesson2');

let countryCode = ref<string>('');

onMounted(() => {
  countryCode.value = getCountryCode();
  // (adsbygoogle = window.adsbygoogle || []).push({});
});

const handleChapterChange = (option: string) => {
  switch (option) {
    case 'chapter1':
      router.push('/');
      break;
    default:
      router.push('/');
      break;
  }
};

const handleLessonChange = (option: string) => {
  switch (option) {
    case 'lesson1':
      router.push('/');
      break;
    case 'lesson2':
      router.push('/lesson2');
      break;
    case 'lesson3':
      router.push('/lesson3');
      break;
    default:
      router.push('/');
      break;
  }
};
</script>

<style scoped>
li {
  text-align: left;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
p {
  padding: 0;
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
.conceptContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}
.conceptImage {
  max-width: 700px;
}
.extraSmall {
  max-width: 180px;
}
.small {
  max-width: 200px;
}
.mediumSmall {
  max-width: 240px;
}
.medium {
  max-width: 460px;
}
.large {
  max-width: 700px;
}
.extraLarge {
  max-width: 1000px;
}
.pathline {
//align-content: normal;
}
</style>
