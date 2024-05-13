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
      <ul>
        <li>1. Basics</li>
        <ul>
          <li>Lesson 0: Problem Solving</li>
          <li>Lesson 1: Minimal Setup</li>
          <li>Lesson 2: Docker Setup</li>
          <li>Lesson 3: Container-Registry Setup</li>
          <li>Lesson 4: Kubernetes Setup</li>
          <li>Lesson 5: Version Control</li>
          <li>Lesson 6: Automatic Deployment</li>
          <li>Lesson 7: Image Analysis</li>
        </ul>
        <li>2. Modern Web Development</li>
        <ul>
          <li>Lesson 8: Development Environment</li>
          <li>Lesson 9: Javascript Framework</li>
          <li>Lesson 10: Unit Testing</li>
          <li>Lesson 11: End-to-End Testing</li>
          <li>Lesson 12: Integration Testing</li>
          <li>Lesson 13: Build Versioning</li>
          <li>Lesson 14: Static Code Analysis</li>
          <li>Lesson 15: 3rd Party Library Analysis</li>
          <li>Lesson 16: Security Analysis</li>
        </ul>
      </ul>
    </section>

    <p>&copy; 2024 LifePathVictory. All rights reserved.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeComponent",
  props: {
    msg: String,
  },
});
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
</style>
