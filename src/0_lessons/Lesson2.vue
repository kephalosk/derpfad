<template>
  <div class="chapter1">
    <section>
      <h2>Chapter 1: Basics</h2>

      <SelectionDropDown :selected="selectedLesson" defaultValue="lesson2" @optionSelected="handleLessonChange">
        <option value="lesson1">Lesson 1: Minimal Setup</option>
        <option value="lesson2">Lesson 2: Container Setup</option>
        <option value="lesson3">Lesson 3: Container-Registry Setup</option>
      </SelectionDropDown>

      <div class="conceptContainer">
        <h4>Concept 6: Web Server</h4>

      </div>

      <div class="conceptContainer">
        <h4>Concept 7: Container</h4>

      </div>

      <div class="conceptContainer">
        <h4>Concept 8: Container Environment</h4>

      </div>

      <div class="conceptContainer">
        <h4>Concept 9: Container Configuration</h4>

      </div>

      <div class="conceptContainer">
        <h4>Concept 10: Project Folder</h4>

      </div>

      <div class="conceptContainer">
        <h4>Concept 11: Shell</h4>

      </div>

      <div class="conceptContainer">
        <h4>Concept 12: Terminal</h4>

      </div>

      <div class="conceptContainer">
        <h4>Concept 13: Executable Path</h4>

      </div>

      <how-to2-container-setup class="conceptContainer"/>
    </section>

    <p>&copy; 2024 EasyWebPath. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">
import SelectionDropDown from "@/components/LessonDropDown.vue";
import {ref} from "vue";
import Explanation5WebBrowser from "@/2_explanations/Explanation5WebBrowser.vue";
import HowTo1MinimalSetup from "@/4_howtos/HowTo1MinimalSetup.vue";
import {useRouter} from "vue-router";
import Concept6WebServer from "@/concepts/Concept6WebServer.vue";
import Concept7Container from "@/concepts/Concept7Container.vue";
import Concept8ContainerEnvironment from "@/concepts/Concept8ContainerEnvironment.vue";
import Concept9ContainerConfiguration from "@/concepts/Concept9ContainerConfiguration.vue";
import Concept10ProjectFolder from "@/concepts/Concept10ProjectFolder.vue";
import Concept11Shell from "@/concepts/Concept11Shell.vue";
import Concept12Terminal from "@/concepts/Concept12Terminal.vue";
import Explanation6WebServer from "@/2_explanations/Explanation6WebServer.vue";
import References6WebServer from "@/3_references/References6WebServer.vue";
import Explanation7Container from "@/2_explanations/Explanation7Container.vue";
import References7Container from "@/3_references/References7Container.vue";
import Explanation8ContainerEnvironment from "@/2_explanations/Explanation8ContainerEnvironment.vue";
import Explanation9ContainerConfiguration from "@/2_explanations/Explanation9ContainerConfiguration.vue";
import Explanation10ProjectFolder from "@/2_explanations/Explanation10ProjectFolder.vue";
import Explanation11Shell from "@/2_explanations/Explanation11Shell.vue";
import References11Shell from "@/3_references/References11Shell.vue";
import Explanation12Terminal from "@/2_explanations/Explanation12Terminal.vue";
import Concept13ExecutablePath from "@/concepts/Concept13ExecutablePath.vue";
import Explanation13ExecutablePath from "@/2_explanations/Explanation13ExecutablePath.vue";
import ArrowIconRight from "@/components/ArrowIconRight.vue";
import HowTo2ContainerSetup from "@/4_howtos/HowTo2ContainerSetup.vue";

const router = useRouter();

const selectedLesson = ref('lesson2')

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
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
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
.chapter1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.conceptContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
