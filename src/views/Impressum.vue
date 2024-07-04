<template>
  <div class="impressum">
    <nav>
      <router-link to="/">Chapter 1: Basics</router-link>
    </nav>
    <h1>Impressum</h1>
    <p>
      Name: Philipp Kraatz<br>
      Addresse: Hans-Böckler-Straße 1, 25746 Heide, Deutschland<br>
    </p>

    <h1>Kontakt</h1>
    <p>
      Email: easywebpathinfo@gmail.com<br>
    </p>

    <h2>Haftungsausschluss:</h2>
    <p>
      Die auf dieser Website verwendeten Symbole stammen von Drittanbietern. Wir erheben keinen Anspruch auf Eigentum oder Rechte an diesen Symbolen. Alle Rechte an diesen Symbolen gehören ihren jeweiligen Eigentümern. Wenn Sie der Meinung sind, dass Inhalte Ihre Urheberrechte verletzen, kontaktieren Sie uns bitte umgehend zur Klärung.
    </p>
    <p>
      Als Amazon-Partner verdiene ich an qualifizierten Käufen.
    </p>

  </div>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: 'Impressum',
  components: {Footer}
}
</script>

<style scoped>
.impressum {
  font-family: Arial, sans-serif;
  color: black;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}
.impressum h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: black;
}
.impressum h2 {
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
}
.impressum p {
  margin-bottom: 15px;
  color: black;
}
</style>