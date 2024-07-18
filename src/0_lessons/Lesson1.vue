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
<!--          <option value="lesson3">Lesson 3: Container-Registry Setup</option>-->
        </LessonDropDown>
      </p>

      <ConceptBlock :concept="concept1PersonalComputer" :countryCode="countryCode" :imageClass="WidthEnum.EXTRASMALL"/>

      <!-- Block_ch1l1c1 -->
<!--      <ins class="adsbygoogle"-->
<!--           style="display:block"-->
<!--           data-ad-client="ca-pub-2740117821379370"-->
<!--           data-ad-slot="5084087822"-->
<!--           data-ad-format="auto"-->
<!--           data-full-width-responsive="true"></ins>-->

      <ConceptBlock :concept="concept2OperatingSystem" :countryCode="countryCode" :imageClass="WidthEnum.SMALL"/>

      <ConceptBlock :concept="concept3WordProcessingProgram" :countryCode="countryCode" :imageClass="WidthEnum.MEDIUMSMALL"/>

      <ConceptBlock :concept="concept4HTMLWebsite" :countryCode="countryCode" :imageClass="WidthEnum.MEDIUM"/>

      <ConceptBlock :concept="concept5WebBrowser" :countryCode="countryCode" :imageClass="WidthEnum.LARGE"/>

      <how-to1-minimal-setup/>
    </section>

  <a href="https://a.check24.net/misc/click.php?pid=305756&aid=330&cat=13" target="_blank"><img src="https://a.check24.net/misc/view.php?pid=305756&aid=330&cat=13" width="300" height="600" style="max-width: 100%; height: auto;" ></a>
</template>

<script setup lang="ts">
import LessonDropDown from "@/components/LessonDropDown.vue";
import {onMounted, ref} from "vue";
import HowTo1MinimalSetup from "@/4_howtos/HowTo1MinimalSetup.vue";
import {useRouter} from "vue-router";
import {concept1PersonalComputer} from "@/1_content/lesson1/concept1PersonalComputer";
import {concept2OperatingSystem} from "@/1_content/lesson1/concept2OperatingSystem";
import lesson3 from "@/0_lessons/Lesson3.vue";
import {concept3WordProcessingProgram} from "@/1_content/lesson1/concept3WordProcessingProgram";
import {concept4HTMLWebsite} from "@/1_content/lesson1/concept4HTMLWebsite";
import {concept5WebBrowser} from "@/1_content/lesson1/concept5WebBrowser";
import ChapterDropDown from "@/components/ChapterDropDown.vue";
import {getCountryCode} from "@/globals/localization/GetCountryCode";
import ConceptBlock from "@/components/ConceptBlock.vue";
import {WidthEnum} from "@/globals/WidthEnum";

const router = useRouter();

const selectedChapter = ref('chapter1');
const selectedLesson = ref('lesson1');

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
</style>
