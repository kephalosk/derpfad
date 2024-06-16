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
        <InfoCard class="conceptImage">
          <img alt="Concept Image" :src="imageConcept" class="conceptImage"/>
        </InfoCard>

        <explanation6-web-server/>
        <references6-web-server/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 7: Container</h4>
        <SelectionDropDown :selected="selectedContainer" defaultValue="docker" @optionSelected="handleOptionSelected">
          <option value="docker">Docker</option>
        </SelectionDropDown>
        <concept7-container :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation7-container/>
        <references7-container/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 8: Container Environment</h4>
        <SelectionDropDown :selected="selectedContainerEnvironment" defaultValue="docker" @optionSelected="handleOptionSelected">
          <option value="docker">Docker Desktop</option>
        </SelectionDropDown>
        <concept8-container-environment :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation8-container-environment/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 9: Container Configuration</h4>
        <concept9-container-configuration :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation9-container-configuration/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 10: Project Folder</h4>
        <concept10-project-folder :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation10-project-folder/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 11: Shell</h4>
        <SelectionDropDown :selected="selectedShell" defaultValue="bash" @optionSelected="handleOptionSelected">
          <option value="bash">bash</option>
        </SelectionDropDown>
        <concept11-shell :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation11-shell/>
        <references11-shell/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 12: Terminal</h4>
        <SelectionDropDown :selected="selectedTerminal" defaultValue="iterm2" @optionSelected="handleOptionSelected">
          <option value="iterm2">iTerm2</option>
        </SelectionDropDown>
        <concept12-terminal :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation12-terminal/>
      </div>

      <div class="conceptContainer">
        <h4>Concept 13: Executable Path</h4>
        <concept13-executable-path :text-editor="textEditor" :icon-text-editor="iconTextEditor" :operating-system="operatingSystem" :icon-o-s="iconOS" :personal-computer="personalComputer" :icon-laptop="iconLaptop"/>
        <explanation13-executable-path/>
      </div>

      <how-to2-container-setup class="conceptContainer"/>
    </section>

    <p>&copy; 2024 EasyWebPath. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">
import SelectionDropDown from "@/components/SelectionDropDown.vue";
import {ref} from "vue";
import Explanation5WebBrowser from "@/2_explanations/Explanation5WebBrowser.vue";
import HowTo1MinimalSetup from "@/4_howtos/HowTo1MinimalSetup.vue";
import {useRouter} from "vue-router";
import Concept6WebServer from "@/1_concepts/Concept6WebServer.vue";
import Concept7Container from "@/1_concepts/Concept7Container.vue";
import Concept8ContainerEnvironment from "@/1_concepts/Concept8ContainerEnvironment.vue";
import Concept9ContainerConfiguration from "@/1_concepts/Concept9ContainerConfiguration.vue";
import Concept10ProjectFolder from "@/1_concepts/Concept10ProjectFolder.vue";
import Concept11Shell from "@/1_concepts/Concept11Shell.vue";
import Concept12Terminal from "@/1_concepts/Concept12Terminal.vue";
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
import Concept13ExecutablePath from "@/1_concepts/Concept13ExecutablePath.vue";
import Explanation13ExecutablePath from "@/2_explanations/Explanation13ExecutablePath.vue";
import ArrowIconRight from "@/components/ArrowIconRight.vue";
import HowTo2ContainerSetup from "@/4_howtos/HowTo2ContainerSetup.vue";
import InfoCard from "@/components/InfoCard.vue";
import Concept from "@/components/Concept.vue";

const router = useRouter();

const selectedLesson = ref('lesson3')

const selectedWebServer = ref('nginx');
const selectedContainer = ref('docker');
const selectedContainerEnvironment = ref('docker');
const selectedShell = ref('bash');
const selectedTerminal = ref('iterm2');

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

const imageConcept: string = require('@/assets/test.jpg');

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
  align-items: center;
  max-width: 100%;
}
.conceptImage {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
