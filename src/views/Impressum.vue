<template>
  <div class="impressum">
    <nav>
      <router-link to="/">Chapter 1: Basics</router-link>
    </nav>
    <h1>Impressum</h1>
    <p>
      Name: Philipp Kraatz<br>
      Address: Hans-Böckler-Straße 1, 25746 Heide, Germany<br>
      Email: easywebpathinfo@gmail.com<br>
    </p>

    <h2>Disclaimer:</h2>
    <p>
      The icons used on this website are sourced from third-party providers. I do not claim ownership or rights over these icons. All rights to these icons belong to their respective owners. If you believe that any content infringes on your copyright, please contact us immediately for resolution.
    </p>

    <p>&copy; 2024 EasyWebPath. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'Impressum'
}
</script>

<style scoped>
.impressum {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}
.impressum h1 {
  font-size: 28px;
  margin-bottom: 10px;
}
.impressum h2 {
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.impressum p {
  margin-bottom: 15px;
}
</style>