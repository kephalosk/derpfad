<template>
  <div class="chapter1">
    <section>
      <h2>Chapter 1: Basics</h2>

      <SelectionDropDown :selected="selectedLesson" defaultValue="Lesson 1: Minimal Setup">
<!--        <option value="lesson0">Lesson 0: Discover Solutions</option>-->
        <option value="lesson1">Lesson 1: Minimal Setup</option>
      </SelectionDropDown>

      <div class="conceptContainer">
        <h4>Concept 1: Personal Computer</h4>

        <SelectionDropDown :selected="selectedDevice" defaultValue="macos" @optionSelected="handleOptionSelected">
          <option value="macos">Apple MacBook</option>
          <option value="windows">Microsoft Surface</option>
          <option value="linux">Lenovo Thinkpad</option>
        </SelectionDropDown>

        <InfoCard class="cardPersonalComputer">
          <Concept :icon="iconLaptop" :representer="personalComputer" name="Personal Computer"/>
        </InfoCard>

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">What is a Personal Computer?</p>
          <p>A Personal Computer is a machine used by web developers for web development, enabling them to write, test, and manage code locally.</p>
        </InfoCard>

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">Why a Personal Computer?</p>
          <ol>
            <li><b>Accessibility and Convenience:</b> Personal computers provide immediate access to development tools and resources, allowing developers to work from anywhere with ease.</li>
            <li><b>Customization and Control:</b> Developers can customize their personal computers with preferred software, settings, and configurations tailored to their specific needs and workflows.</li>
            <li><b>Cost-Effectiveness:</b> Using a personal computer eliminates the need for expensive server infrastructure for development and testing, making it a cost-effective solution for web development tasks.</li>
          </ol>
        </InfoCard>

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">Further Information:</p>
          <p class="bookinfo">
            <a href="https://www.amazon.com/Apple-MacBook-Laptop-12%E2%80%91core-18%E2%80%91core/dp/B0CM5KXB2B" target="_blank"><img alt="Cover Image" :src="imageCoverPersonalComputerApple" :style="{ width: '200px'}"/></a>
            <a href="https://www.amazon.com/Apple-MacBook-Laptop-12%E2%80%91core-18%E2%80%91core/dp/B0CM5KXB2B" target="_blank">Apple MacBook</a>
          </p>
          <p class="bookinfo">
            <a href="https://www.amazon.com/Microsoft-Surface-Laptop-Studio-Touchscreen/dp/B0CDK3H8XH" target="_blank"><img alt="Cover Image" :src="imageCoverPersonalComputerMicrosoft" :style="{ width: '200px'}"/></a>
            <a href="https://www.amazon.com/Microsoft-Surface-Laptop-Studio-Touchscreen/dp/B0CDK3H8XH" target="_blank">Microsoft Surface</a>
          </p>
          <p class="bookinfo">
            <a href="https://www.amazon.com/Lenovo-ThinkPad-Business-i7-1165G7-Fingerprint/dp/B0CHFVYMBC" target="_blank"><img alt="Cover Image" :src="imageCoverPersonalComputerLenovo" :style="{ width: '200px'}"/></a>
            <a href="https://www.amazon.com/Lenovo-ThinkPad-Business-i7-1165G7-Fingerprint/dp/B0CHFVYMBC" target="_blank">Lenovo ThinkPad</a>
          </p>
        </InfoCard>
      </div>

      <div class="conceptContainer">
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

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">What is an Operating System?</p>
          <p>An operating system is software that manages a computer's hardware and provides common services for computer programs.</p>
        </InfoCard>

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">Why an Operating System?</p>
          <ol>
            <li><b>Resource Management:</b> An Operating System efficiently manages and allocates hardware resources such as CPU, memory, and storage to various applications.</li>
            <li><b>User Interface:</b> It provides a user interface, enabling users to interact with the computer through graphical or command-line interfaces.</li>
            <li><b>Security and Stability:</b> The operating system ensures security by controlling access to resources and maintains system stability by managing processes and preventing conflicts.</li>
          </ol>
        </InfoCard>

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">Further Information:</p>
          <p class="bookinfo">
            <a href="https://www.amazon.com/macOS-Sonoma-Dummies-Computer-tech/dp/139421975X" target="_blank"><img alt="Cover Image" :src="imageCoverOperatingSystemMacos" :style="{ width: '200px'}"/></a>
            <a href="https://www.amazon.com/macOS-Sonoma-Dummies-Computer-tech/dp/139421975X" target="_blank">Guy Hart-Davis: macOS Sonoma For Dummies </a>
          </p>
          <p class="bookinfo">
            <a href="https://www.amazon.com/Windows-11-Dummies-Andy-Rathbone/dp/1119846471" target="_blank"><img alt="Cover Image" :src="imageCoverOperatingSystemWindows" :style="{ width: '200px'}"/></a>
            <a href="https://www.amazon.com/Windows-11-Dummies-Andy-Rathbone/dp/1119846471" target="_blank">Andy Rathbone: Windows 11 For Dummies</a>
          </p>
          <p class="bookinfo">
            <a href="https://www.amazon.com/Linux-Bible-Christopher-Negus/dp/1119578884" target="_blank"><img alt="Cover Image" :src="imageCoverOperatingSystemLinux" :style="{ width: '200px'}"/></a>
            <a href="https://www.amazon.com/Linux-Bible-Christopher-Negus/dp/1119578884" target="_blank">Christopher Negus: Linux Bible</a>
          </p>
        </InfoCard>
      </div>

      <div class="conceptContainer">
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

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">What is a Word Processing Program?</p>
          <p>A word processing program is software that allows users to create, edit, format, and print text documents.</p>
        </InfoCard>

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">Why a Word Processing Program?</p>
          <ol>
            <li><b>Code Structuring:</b> ord processing programs aid developers in organizing code snippets and files.</li>
            <li><b>Documentation:</b> They assist in creating and maintaining project documentation.</li>
            <li><b>Content Planning:</b> These programs help in outlining website content, facilitating the planning and organization of information before implementation.</li>
          </ol>
        </InfoCard>
      </div>

      <div class="conceptContainer">
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

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">What is HTML?</p>
          <p>HTML (HyperText Markup Language) is the standard markup language used to create and structure content on web pages.</p>
        </InfoCard>

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">Why HTML?</p>
          <ol>
            <li><b>Foundation of Web Pages:</b> HTML is the fundamental building block of web pages.</li>
            <li><b>Standardized and Universally Supported:</b> As a standard maintained by the World Wide Web Consortium (W3C), HTML is universally supported by all web browsers.</li>
            <li><b>Easy to Learn and Use:</b> HTML is relatively simple to learn, with a clear and intuitive syntax.</li>
          </ol>
        </InfoCard>

        <InfoCard class="cardExplanation">
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
        </InfoCard>
      </div>

      <div class="conceptContainer">
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

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">What is a Web Browser?</p>
          <p>A web browser is software used to access and view content on the World Wide Web.</p>
        </InfoCard>

        <InfoCard class="cardExplanation">
          <p class="explanationHeading">Why HTML?</p>
          <ol>
            <li><b>Local Development:</b> Web browsers support local development by rendering and previewing web pages and applications stored on a developer's computer.</li>
            <li><b>Interactivity and Functionality:</b> They provide features such as tabbed browsing, bookmarking, and extensions, enhancing user experience and enabling interaction with web content.</li>
            <li><b>Compatibility Testing:</b> Developers use web browsers to test and debug websites and web applications, ensuring compatibility and functionality across different platforms and devices.</li>
          </ol>
        </InfoCard>
      </div>

      <h4>HowTo: Minimal Setup</h4>

      <InfoCard class="cardHowTo">
        <ol>
          <li>Open <b>Word Processing Program</b>.</li>
          <li>Create new file.</li>
          <li>
            <div class="codeView">
              Paste in:
              <InfoCard class="cardCode">
                <pre><code>
                  {{ basicHTML }}
                </code></pre>
              </InfoCard>
            </div>
          </li>
          <li>Save file as <b>index.html</b> (only with .html extension)</li>
          <li>Open <b>Web Browser</b>.</li>
          <li>
            Open <b>index.html</b> in <b>Web Browser</b>.
            <InfoCard class="cardImage">
              <img alt="Cover Image" :src="resultHTML" :style="{ width: '400px'}"/>
            </InfoCard></li>
        </ol>

      </InfoCard>
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

const selectedLesson = ref('lesson1')

let personalComputer = ref<string>("Apple MacBook");
const selectedDevice = ref('macos');
const iconMacbook: string = require('@/assets/icon_macbook.png');
const iconSurface: string = require('@/assets/icon_surface.png');
const iconThinkpad: string = require('@/assets/icon_thinkpad.png');
let iconLaptop = ref<string>(iconMacbook);
const imageCoverPersonalComputerApple: string = require('@/assets/cover_personalcomputer_apple.jpg');
const imageCoverPersonalComputerMicrosoft: string = require('@/assets/cover_personalcomputer_microsoft.jpg');
const imageCoverPersonalComputerLenovo: string = require('@/assets/icon_thinkpad.png');

let operatingSystem = ref<string>("macOS");
const selectedOS = ref('macos');
const iconMacos: string = require('@/assets/icon_macos.png');
const iconWindows: string = require('@/assets/icon_windows.png');
const iconLinux: string = require('@/assets/icon_linux.png');
let iconOS = ref<string>(iconMacos);
const imageCoverOperatingSystemMacos: string = require('@/assets/cover_operatingsystem_macos.jpg');
const imageCoverOperatingSystemWindows: string = require('@/assets/cover_operatingsystem_windows.jpg');
const imageCoverOperatingSystemLinux: string = require('@/assets/cover_operatingsystem_linux.jpeg');

let textEditor = ref<string>("TextEdit");
const selectedTextEditor = ref('macos');
const iconTextEdit: string = require('@/assets/icon_textEdit.png');
const iconNotepad: string = require('@/assets/icon_notepad.png');
const iconGedit: string = require('@/assets/icon_gedit.png');
let iconTextEditor = ref<string>(iconTextEdit);

const iconHTML: string = require('@/assets/icon_document_html.png');
const imageAffiliateHtmlDuckett: string = require('@/assets/cover_html_duckett.jpg');
const imageAffiliateHtmlMcgrath: string = require('@/assets/cover_html_mcgrath.jpg');
const imageAffiliateHtmlRobsen: string = require('@/assets/cover_html_robsen.jpg');

const iconChrome: string = require('@/assets/icon_chrome.png');

const resultHTML: string = require('@/assets/result_html.png');

const basicHTML: string = "\n<!DOCTYPE html>\n" +
"<html>\n" +
"<head>\n" +
"    <title>My Easy Website Title</title>\n" +
"</head>\n" +
"<body>\n" +
"    <h1>My Easy Website Heading</h1>\n" +
"    <p>My Easy Website Paragraph.</p>\n" +
"</body>\n" +
"</html>"

const handleOptionSelected = (option: string) => {
  console.log('test');
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
.cardHowTo {
  display: flex;
  flex-direction: column;
  max-width: 700px;
}
.cardExplanation {
  width: 700px;
}
.cardRow {
  display: flex;
  flex-direction: row;
}
.chapter1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.codeView {
  display: flex;
  flex-direction: column;
}
.conceptContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.explanationHeading {
  font-weight: bold;
  font-style: italic;
}
</style>
