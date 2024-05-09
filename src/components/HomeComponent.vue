<template>
  <div class="homeComponent">
    <section>
      <h2>Der Pfad</h2>
      <p>
        Der Pfad ist ein Mind-Superset zur Erlösung, Heilung, Befreiung,
        Neutralisierung und Restrukturierung von Traumata.
      </p>
    </section>

    <section>
      <h2>Kernkonzepte</h2>
      <ul>
        <li>1. Bewusstsein</li>
        <ul>
          <li>1.1 Atmen</li>
          <li>1.2 Wahrnehmen</li>
          <li>1.3 Beobachten</li>
          <li>1.4 Erweitern</li>
          <li>1.5 Akzeptieren</li>
        </ul>
        <li>2. Glaube</li>
        <ul>
          <li>2.1 Wahrheit</li>
          <li>2.2 Luege</li>
          <li>2.3 Vertrauen</li>
          <li>2.4 Dankbarkeit</li>
          <li>2.5 Heilung</li>
        </ul>
        <li>3. Bestimmung</li>
        <ul>
          <li>3.1 Konzepte</li>
          <li>3.2 Projekte</li>
          <li>3.3 Artefakte</li>
          <li>3.4 Berufung</li>
          <li>3.5 Vertrieb</li>
        </ul>
        <li>4. Gemeinschaft</li>
        <ul>
          <li>4.1 Existenz</li>
          <li>4.2 Investitionen</li>
          <li>4.3 Erledigungen</li>
          <li>4.4 Hobbies</li>
          <li>4.5 Beziehungen</li>
        </ul>
        <li>5. Erfüllung</li>
        <ul>
          <li>5.1 Traeume</li>
          <li>5.2 Ziele</li>
          <li>5.3 Schritte</li>
          <li>5.4 Protokolle</li>
          <li>5.5 Erfolge</li>
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
