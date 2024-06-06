<template>
  <div class="homeComponent">
    <section>
      <h1>The Easy Path To Master Web Development</h1>
      <p>
        Easy Web Path provides a step-by-step overview of core concepts in web
        development and how they interact.
      </p>
    </section>

    <section>

      <h2>Chapter 1: Basics</h2>

      <SelectionDropDown :selected="selectedLesson" defaultValue="Lesson 1: Minimal Setup">
        <option value="lesson0">Lesson 0: Discover Solutions</option>
        <option value="lesson1">Lesson 1: Minimal Setup</option>
      </SelectionDropDown>

      <h4>Concept 1: Personal Computer</h4>

      <SelectionDropDown :selected="selectedDevice" defaultValue="macos" @optionSelected="handleOptionSelected">
        <option value="macos">Apple Macbook</option>
        <option value="windows">Microsoft Surface</option>
        <option value="linux">Lenovo Thinkpad</option>
      </SelectionDropDown>

      <InfoCard class="cardPersonalComputer">
        <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
      </InfoCard>

      <h4>Concept 2: Operating System</h4>

      <SelectionDropDown :selected="selectedOS" defaultValue="macos" @optionSelected="handleOptionSelected">
        <option value="macos">macOS</option>
        <option value="windows">Windows</option>
        <option value="linux">Linux</option>
      </SelectionDropDown>

      <InfoCard class="cardPersonalComputer">
        <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
        <Concept :icon="iconOS" :representer="operatingSystem" name="Operating System"/>
      </InfoCard>

      <h4>Concept 3: Word Processing Program</h4>

      <SelectionDropDown :selected="selectedTextEditor" defaultValue="macos" @optionSelected="handleOptionSelected">
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

      <h4>Concept 4: HTML-Website</h4>

      <InfoCard class="cardPersonalComputer">
        <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
        <InfoCard class="cardOperatingSystem">
          <Concept :icon="iconOS" :representer="operatingSystem" name="Operating System"/>
          <section class="cardRow">
            <Concept :icon="iconTextEditor" :representer="textEditor" name="Word Processing Program"/>
            <ArrowIcon label="create"/>
            <Concept :icon="iconHTML" representer="index.html" name="HTML-Website"/>
          </section>
        </InfoCard>
      </InfoCard>

      <p class="explanationHeading">What is HTML?</p>
      <ol>
        <li>HTML stands for <b>HyperText Markup Language</b>.</li>
        <li>HTML is the <b>standard markup language</b> used to create and structure content on the web.</li>
        <li>HTML uses elements represented by <b>tags, such as headings, paragraphs, links, images, and more</b>, allowing browsers to display text, images, and other multimedia elements in a formatted manner.</li>
      </ol>

      <p class="explanationHeading">Why HTML?</p>
      <ol>
        <li><b>Foundation of Web Pages:</b> HTML is the fundamental building block of web pages.</li>
        <li><b>Standardized and Universally Supported:</b> As a standard maintained by the World Wide Web Consortium (W3C), HTML is universally supported by all web browsers.</li>
        <li><b>Easy to Learn and Use:</b> HTML is relatively simple to learn, with a clear and intuitive syntax.</li>
      </ol>

      <p class="explanationHeading">Further Information:</p>
      <p class="bookinfo">
        <a href="https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189" target="_blank"><img alt="Cover Image" :src="imageAffiliateHtmlDuckett" :style="{ width: '200px'}"/></a>
        <a href="https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189" target="_blank">Jon Duckett: HTML and CSS: Design and Build Websites</a>
      </p>
      <p class="bookinfo">
        <a href="https://www.amazon.com/HTML-easy-steps-Mike-McGrath/dp/1840788763" target="_blank"><img alt="Cover Image" :src="imageAffiliateHtmlMcgrath" :style="{ width: '200px'}"/></a>
        <a href="https://www.amazon.com/HTML-easy-steps-Mike-McGrath/dp/1840788763" target="_blank">Mike Mcgrath: HTML in Easy Steps</a>
      </p>
      <p class="bookinfo">
        <a href="https://www.amazon.com/Head-First-HTML-CSS-Standards-Based/dp/0596159900" target="_blank"><img alt="Cover Image" :src="imageAffiliateHtmlRobsen" :style="{ width: '200px'}"/></a>
        <a href="https://www.amazon.com/Head-First-HTML-CSS-Standards-Based/dp/0596159900" target="_blank">Elisabeth Robson, Eric Freeman: Head First HTML and CSS: A Learner's Guide to Creating Standards-Based Web Pages</a>
      </p>

      <h4>Concept 5: Web Browser</h4>

      <InfoCard class="cardPersonalComputer">
        <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
        <InfoCard class="cardOperatingSystem">
          <Concept :icon="iconOS" :representer="operatingSystem" name="Operating System"/>
          <section class="cardRow">
            <Concept :icon="iconTextEditor" :representer="textEditor" name="Word Processing Program"/>
            <ArrowIcon label="create"/>
            <Concept :icon="iconHTML" representer="index.html" name="HTML-Website"/>
            <ArrowIcon label="open in"/>
            <Concept :icon="iconChrome" representer="Chrome" name="Web Browser"/>
          </section>
        </InfoCard>
      </InfoCard>

      <h4>HowTo: Minimal Setup</h4>
    </section>

    <p>&copy; 2024 EasyWebPath. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">
import ArrowIcon from "@/components/ArrowIconRight.vue";
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

const selectedLesson = ref('lesson1')

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
const imageAffiliateHtmlDuckett: string = require('@/assets/affiliate_html_duckett.jpg');
const imageAffiliateHtmlMcgrath: string = require('@/assets/affiliate_html_mcgrath.jpg');
const imageAffiliateHtmlRobsen: string = require('@/assets/affiliate_html_robsen.jpg');

const iconChrome: string = require('@/assets/icon_chrome.png');

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
.bookinfo {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
}
.cardRow {
  display: flex;
  flex-direction: row;
}
.explanationHeading {
  font-weight: bold;
  font-style: italic;
}
</style>
