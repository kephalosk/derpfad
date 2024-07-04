<template>
  <div class="legalDisclosure">
    <nav>
      <router-link to="/">Chapter 1: Basics</router-link>
    </nav>

    <h1>Legal Disclosure</h1>
    <p>
      Name: Philipp Kraatz<br>
      Address: Hans-Böckler-Straße 1, 25746 Heide, Germany<br>
    </p>

    <h1>Contact</h1>
    <p>
      Email: easywebpathinfo@gmail.com<br>
    </p>

    <h2>Disclaimer:</h2>
    <p>
      The icons used on this website are sourced from third-party providers. We do not claim ownership or rights over these icons. All rights to these icons belong to their respective owners. If you believe that any content infringes on your copyright, please contact us immediately for resolution.
    </p>
    <p>
      As an Amazon Associate, I earn from qualifying purchases.
    </p>

  </div>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: 'Legal Disclosure',
  components: {Footer}
}
</script>

<style scoped>
.legalDisclosure {
  font-family: Arial, sans-serif;
  color: black;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}
.legalDisclosure h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: black;
}
.legalDisclosure h2 {
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
}
.legalDisclosure p {
  margin-bottom: 15px;
  color: black;
}
</style>