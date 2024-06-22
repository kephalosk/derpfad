<template>

  <div>
    <section>
      <h2>Chapter 1: Basics</h2>

      <SelectionDropDown :selected="selectedLesson" defaultValue="lesson3" @optionSelected="handleLessonChange">
        <option value="lesson1">Lesson 1: Minimal Setup</option>
        <option value="lesson2">Lesson 2: Container Setup</option>
        <option value="lesson3">Lesson 3: Container-Registry Setup</option>
      </SelectionDropDown>

      <div class="conceptContainer">
        <h4>Concept 14: Container Registry</h4>

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
import {useRouter} from "vue-router";
import HowTo2ContainerSetup from "@/4_howtos/HowTo2ContainerSetup.vue";

const router = useRouter();

const selectedLesson = ref('lesson3')

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
  align-items: center;
  max-width: 100%;
}
.conceptImage {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
