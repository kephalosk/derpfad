<template>
  <div class="chapter1">
    <section>
      <h2>Chapter 1: Basics</h2>

      <SelectionDropDown :selected="selectedLesson" defaultValue="lesson2" @optionSelected="handleLessonChange">
        <option value="lesson1">Lesson 1: Minimal Setup</option>
        <option value="lesson2">Lesson 2: Docker Setup</option>
      </SelectionDropDown>

      <div class="conceptContainer">
        <h4>Concept 6: Web Server</h4>
        <SelectionDropDown :selected="selectedWebServer" defaultValue="nginx" @optionSelected="handleOptionSelected">
          <option value="nginx">NGINX</option>
        </SelectionDropDown>
        <concept6-web-server :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation1-personal-computer/>
        <references1-personal-computer/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 7: Container</h4>
        <SelectionDropDown :selected="selectedOS" defaultValue="macos" @optionSelected="handleOptionSelected">
          <option value="macos">macOS</option>
          <option value="windows">Windows</option>
          <option value="linux">Linux</option>
        </SelectionDropDown>
        <concept7-container :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation2-operating-system/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 8: Container Environment</h4>
        <SelectionDropDown :selected="selectedTextEditor" defaultValue="macos" @optionSelected="handleOptionSelected">
          <option value="macos">TextEdit</option>
          <option value="windows">Notepad</option>
          <option value="linux">gedit</option>
        </SelectionDropDown>
        <concept8-container-environment :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation3-word-processing-programm/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 9: Container Configuration</h4>
        <concept9-container-configuration :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation4-h-t-m-l-website/>
        <references4-h-t-m-l-website/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 10: Project Folder</h4>
        <concept10-project-folder :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation5-web-browser/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 11: Shell</h4>
        <concept11-shell :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation5-web-browser/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 12: Terminal</h4>
        <concept12-terminal :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation5-web-browser/>
      </div>

      <how-to-minimal-setup/>
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
import HowToMinimalSetup from "@/4_howtos/HowToMinimalSetup.vue";
import {useRouter} from "vue-router";
import Concept6WebServer from "@/1_concepts/Concept6WebServer.vue";
import Concept7Container from "@/1_concepts/Concept7Container.vue";
import Concept8ContainerEnvironment from "@/1_concepts/Concept8ContainerEnvironment.vue";
import Concept9ContainerConfiguration from "@/1_concepts/Concept9ContainerConfiguration.vue";
import Concept10ProjectFolder from "@/1_concepts/Concept10ProjectFolder.vue";
import Concept11Shell from "@/1_concepts/Concept11Shell.vue";
import Concept12Terminal from "@/1_concepts/Concept12Terminal.vue";

const router = useRouter();

const selectedLesson = ref('lesson2')

let webServer = ref<string>("NGINX");
const selectedWebServer = ref('nginx');

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
