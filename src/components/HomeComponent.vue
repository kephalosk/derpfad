<template>
  <div class="homeComponent">
    <section>
      <h2>The Easy Path To Master Web Development</h2>
      <p>
        Easy Web Path provides a step-by-step overview of core concepts in web
        development and how they interact.
      </p>
    </section>

    <section>
      <h2>Core Concepts</h2>

      <h3>1. Bascics</h3>

      <h4>Lesson 0: Discover Solutions</h4>

      <h4>Lesson 1: Minimal Setup</h4>

      <h5>Concept 1: Personal Computer</h5>

      <SelectionDropDown :selected="selectedDevice" @optionSelected="handleOptionSelected">
        <option value="macos">Apple Macbook</option>
        <option value="windows">Microsoft Surface</option>
        <option value="linux">Lenovo Thinkpad</option>
      </SelectionDropDown>

      <InfoCard class="cardPersonalComputer">
        <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
      </InfoCard>

      <h5>Concept 2: Operating System</h5>

      <SelectionDropDown :selected="selectedOS" @optionSelected="handleOptionSelected">
        <option value="macos">macOS</option>
        <option value="windows">Windows</option>
        <option value="linux">Linux</option>
      </SelectionDropDown>

      <InfoCard class="cardPersonalComputer">
        <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
        <Concept :icon="iconOS" :representer="operatingSystem" name="Operating System"/>
      </InfoCard>

      <h5>Concept 3: Word Processing Program</h5>

      <SelectionDropDown :selected="selectedTextEditor" @optionSelected="handleOptionSelected">
        <option value="macos">TextEdit</option>
        <option value="windows">Notepad</option>
        <option value="linux">gedit</option>
      </SelectionDropDown>

      <InfoCard class="cardPersonalComputer">
        <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
        <InfoCard class="cardOperatingSystem">
          <Concept :icon="iconOS" :representer="operatingSystem" name="Operating System"/>
          <Concept :icon="iconTextEditor" :representer="textEditor" name="Word Processing Program"/>
        </InfoCard>
      </InfoCard>

    <h5>Concept 4: Hyper Text Markup Language</h5>

    <InfoCard class="cardPersonalComputer">
      <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
      <InfoCard class="cardOperatingSystem">
        <Concept :icon="iconOS" :representer="operatingSystem" name="Operating System"/>
        <section class="cardRow">
          <Concept :icon="iconTextEditor" :representer="textEditor" name="Word Processing Program"/>
          <Concept :icon="iconHTML" representer="index.html" name="HTML-Website"/>
        </section>
      </InfoCard>
    </InfoCard>
    </section>

    <p>&copy; 2024 LifePathVictory. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
import Concept from "@/components/Concept.vue";
import SelectionDropDown from "@/components/SelectionDropDown.vue";
import {ref} from "vue";

const props = defineProps({
  msg: {
    type: String,
    required: true,
  }
});

let personalComputer = ref<string>("Apple Macbook");
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

const iconHTML: string = require('@/assets/icon_document_html.png');

const handleOptionSelected = (option: string) => {
  console.log('test');
  switch (option) {
    case 'macos':
      iconLaptop.value = iconMacbook;
      personalComputer.value = "Apple Macbook";
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
      personalComputer.value = "Apple Macbook";
      selectedDevice.value = option;

      iconOS.value = iconMacos;
      operatingSystem.value = "macOS";
      selectedOS.value = option;

      iconTextEditor.value = iconTextEdit;
      textEditor.value = "TextEdit";
      selectedTextEditor.value = option;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cardRow {
  display: flex;
  flex-direction: row;
}
</style>
