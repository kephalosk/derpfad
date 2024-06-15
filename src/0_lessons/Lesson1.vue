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
        <h4>Concept 1: Personal Computer</h4>
        <SelectionDropDown :selected="selectedDevice" defaultValue="macos" @optionSelected="handleOptionSelected">
          <option value="macos">Apple MacBook</option>
          <option value="windows">Microsoft Surface</option>
          <option value="linux">Lenovo Thinkpad</option>
        </SelectionDropDown>
        <concept1-personal-computer :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation1-personal-computer/>
        <references1-personal-computer/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 2: Operating System</h4>
        <SelectionDropDown :selected="selectedOS" defaultValue="macos" @optionSelected="handleOptionSelected">
          <option value="macos">macOS</option>
          <option value="windows">Windows</option>
          <option value="linux">Linux</option>
        </SelectionDropDown>
        <concept2-operating-system :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation2-operating-system/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 3: Word Processing Program</h4>
        <SelectionDropDown :selected="selectedTextEditor" defaultValue="macos" @optionSelected="handleOptionSelected">
          <option value="macos">TextEdit</option>
          <option value="windows">Notepad</option>
          <option value="linux">gedit</option>
        </SelectionDropDown>
        <concept3-word-processing-program :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation3-word-processing-programm/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 4: HTML-Website</h4>
        <concept4-h-t-m-l-website :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation4-h-t-m-l-website/>
        <references4-h-t-m-l-website/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 5: Web Browser</h4>
        <concept5-web-browser :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation5-web-browser/>
      </div>

      <how-to1-minimal-setup/>
    </section>

    <p>&copy; 2024 EasyWebPath. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">
import SelectionDropDown from "@/components/SelectionDropDown.vue";
import {ref} from "vue";
import Concept1PersonalComputer from "@/1_concepts/Concept1PersonalComputer.vue";
import Concept2OperatingSystem from "@/1_concepts/Concept2OperatingSystem.vue";
import Concept3WordProcessingProgram from "@/1_concepts/Concept3WordProcessingProgram.vue";
import Concept4HTMLWebsite from "@/1_concepts/Concept4HTMLWebsite.vue";
import Concept5WebBrowser from "@/1_concepts/Concept5WebBrowser.vue";
import Explanation1PersonalComputer from "@/2_explanations/Explanation1PersonalComputer.vue";
import Explanation2OperatingSystem from "@/2_explanations/Explanation2OperatingSystem.vue";
import Explanation3WordProcessingProgramm from "@/2_explanations/Explanation3WordProcessingProgramm.vue";
import Explanation4HTMLWebsite from "@/2_explanations/Explanation4HTMLWebsite.vue";
import Explanation5WebBrowser from "@/2_explanations/Explanation5WebBrowser.vue";
import References1PersonalComputer from "@/3_references/References1PersonalComputer.vue";
import References4HTMLWebsite from "@/3_references/References4HTMLWebsite.vue";
import HowTo1MinimalSetup from "@/4_howtos/HowTo1MinimalSetup.vue";
import {useRouter} from "vue-router";

const router = useRouter();

const selectedLesson = ref('lesson1')

let personalComputer = ref<string>("Apple MacBook");
const selectedDevice = ref('macos');
const iconMacbook: string = require('@/assets/icon_macbook.png');
const iconSurface: string = require('@/assets/icon_surface.png');
const iconThinkpad: string = require('@/assets/icon_thinkpad.png');
let iconLaptop = ref<string>(iconMacbook);

let operatingSystem = ref<string>("macOS");
const selectedOS = ref('macos');
const iconMacos: string = require('@/assets/icon_macos.png');
const iconWindows: string = require('@/assets/icon_windows.png');
const iconLinux: string = require('@/assets/icon_linux.png');
let iconOS = ref<string>(iconMacos);

let textEditor = ref<string>("TextEdit");
const selectedTextEditor = ref('macos');
const iconTextEdit: string = require('@/assets/icon_textEdit.png');
const iconNotepad: string = require('@/assets/icon_notepad.png');
const iconGedit: string = require('@/assets/icon_gedit.png');
let iconTextEditor = ref<string>(iconTextEdit);

const handleOptionSelected = (option: string) => {
  switch (option) {
    case 'macos':
      iconLaptop.value = iconMacbook;
      personalComputer.value = "Apple MacBook";
      selectedDevice.value = option;

      iconOS.value = iconMacos;
      operatingSystem.value = "macOS";
      selectedOS.value = option;

      iconTextEditor.value = iconTextEdit;
      textEditor.value = "TextEdit";
      selectedTextEditor.value = option;
      break;
    case 'windows':
      iconLaptop.value = iconSurface;
      personalComputer.value = "Microsoft Surface";
      selectedDevice.value = option;

      iconOS.value = iconWindows;
      operatingSystem.value = "Windows";
      selectedOS.value = option;

      iconTextEditor.value = iconNotepad;
      textEditor.value = "Notepad";
      selectedTextEditor.value = option;
      break;
    case 'linux':
      iconLaptop.value = iconThinkpad;
      personalComputer.value = "Lenovo Thinkpad";
      selectedDevice.value = option;

      iconOS.value = iconLinux;
      operatingSystem.value = "Linux";
      selectedOS.value = option;

      iconTextEditor.value = iconGedit;
      textEditor.value = "gedit";
      selectedTextEditor.value = option;
      break;
    default:
      iconLaptop.value = iconMacbook;
      personalComputer.value = "Apple MacBook";
      selectedDevice.value = option;

      iconOS.value = iconMacos;
      operatingSystem.value = "macOS";
      selectedOS.value = option;

      iconTextEditor.value = iconTextEdit;
      textEditor.value = "TextEdit";
      selectedTextEditor.value = option;
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
