<template>
    <section>
      <ChapterCard>
        <h2>Chapter 1: Basics</h2>
      </ChapterCard>

      <p>
        <SelectionDropDown :selected="selectedLesson" defaultValue="lesson2" @optionSelected="handleLessonChange">
          <option value="lesson1">Lesson 1: Minimal Setup</option>
<!--          <option value="lesson2">Lesson 2: Container Setup</option>-->
<!--          <option value="lesson3">Lesson 3: Container-Registry Setup</option>-->
        </SelectionDropDown>
      </p>

      <div class="conceptContainer">
        <h4 class="banner-heading">{{ concept1.heading }}</h4>
        <p><ConceptImage :image-link="concept1.image" class="conceptImage extraSmall"/></p>
        <p><Definition :concept-name="concept1.name" :definition="concept1.definition"/></p>
        <p><Explanation :concept-name="concept1.name" :buzzwords="concept1.buzzwords" :explanations="concept1.explanations"/></p>
        <p><References :details="concept1.references" class="large"/></p>
      </div>

      <div class="conceptContainer">
        <h4 class="banner-heading">{{ concept2.heading }}</h4>
        <p><ConceptImage :image-link="concept2.image" class="conceptImage small"/></p>
        <p><Definition :concept-name="concept2.name" :definition="concept2.definition"/></p>
        <p><Explanation :concept-name="concept2.name" :buzzwords="concept2.buzzwords" :explanations="concept2.explanations"/></p>
        <p><References :details="concept2.references" class="large"/></p>
      </div>

      <div class="conceptContainer">
        <h4 class="banner-heading">{{ concept3.heading }}</h4>
        <p><ConceptImage :image-link="concept3.image" class="conceptImage mediumSmall"/></p>
        <p><Definition :concept-name="concept3.name" :definition="concept3.definition"/></p>
        <p><Explanation :concept-name="concept3.name" :buzzwords="concept3.buzzwords" :explanations="concept3.explanations"/></p>
        <p><References :details="concept3.references" class="large"/></p>
      </div>

      <div class="conceptContainer">
        <h4 class="banner-heading">{{ concept4.heading }}</h4>
        <p><ConceptImage :image-link="concept4.image" class="conceptImage medium"/></p>
        <p><Definition :concept-name="concept4.name" :definition="concept4.definition"/></p>
        <p><Explanation :concept-name="concept4.name" :buzzwords="concept4.buzzwords" :explanations="concept4.explanations"/></p>
        <p><References :details="concept4.references" class="large"/></p>
      </div>

      <div class="conceptContainer">
        <h4 class="banner-heading">{{ concept5.heading }}</h4>
        <ConceptImage :image-link="concept5.image" class="conceptImage large"/>
        <p><Definition :concept-name="concept5.name" :definition="concept5.definition"/></p>
        <p><Explanation :concept-name="concept5.name" :buzzwords="concept5.buzzwords" :explanations="concept5.explanations"/></p>
        <p><References :details="concept5.references" class="large"/></p>
      </div>

      <how-to1-minimal-setup class="conceptContainer"/>
    </section>

    <p>&copy; 2024 EasyWebPath. All rights reserved.</p>
</template>

<script setup lang="ts">
import SelectionDropDown from "@/components/SelectionDropDown.vue";
import {ref} from "vue";
import Concept2OperatingSystem from "@/concepts/Concept2OperatingSystem.vue";
import Concept3WordProcessingProgram from "@/concepts/Concept3WordProcessingProgram.vue";
import Concept4HTMLWebsite from "@/concepts/Concept4HTMLWebsite.vue";
import Concept5WebBrowser from "@/concepts/Concept5WebBrowser.vue";
import Explanation2OperatingSystem from "@/2_explanations/Explanation2OperatingSystem.vue";
import Explanation3WordProcessingProgramm from "@/2_explanations/Explanation3WordProcessingProgramm.vue";
import Explanation4HTMLWebsite from "@/2_explanations/Explanation4HTMLWebsite.vue";
import Explanation5WebBrowser from "@/2_explanations/Explanation5WebBrowser.vue";
import References4HTMLWebsite from "@/3_references/References4HTMLWebsite.vue";
import HowTo1MinimalSetup from "@/4_howtos/HowTo1MinimalSetup.vue";
import {useRouter} from "vue-router";
import Explanation from "@/components/Explanation.vue";
import Definition from "@/components/Definition.vue";
import ConceptImage from "@/components/ConceptImage.vue";
import References from "@/components/References.vue";
import {
  concept1,
} from "@/1_content/concept1PersonalComputer";
import {
  concept2,
} from "@/1_content/concept2OperatingSystem";
import lesson3 from "@/0_lessons/Lesson3.vue";
import {concept3} from "@/1_content/concept3WordProcessingProgram";
import {concept4} from "../1_content/concept4HTMLWebsite";
import {concept5} from "../1_content/concept5WebBrowser";
import InfoCard from "@/components/InfoCard.vue";
import ChapterCard from "@/components/ChapterCard.vue";

const router = useRouter();

const selectedLesson = ref('lesson1');

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
p {
  padding: 0;
}
.banner-heading {
  background: linear-gradient(to bottom right, #31ffff, #ffffff);
  color: #000066; /* Dark blue text */
  padding: 10px 20px; /* Adjust padding to your preference */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  display: inline-block; /* Ensures the background fits the text content */
  font-weight: bold; /* Make the text bold */
  text-align: center; /* Center-align the text */
  width: 100%;
}
.conceptContainer {
  align-items: center;
  max-width: 100%;
}
.conceptImage {
  width: 100%;
  height: auto;
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
</style>
