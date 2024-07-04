<template>
  <div class="impressum">
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
  <p class="footer">&copy; 2024 EasyWebPath. All rights reserved. As an Amazon Associate, I earn from qualifying purchases. <router-link to="/impressum">Impressum</router-link> <router-link to="/legaldisclosure">Legal Disclosure</router-link></p>
</template>

<script>
export default {
  name: 'Impressum'
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
.footer {
  color: #139494;
}
</style>