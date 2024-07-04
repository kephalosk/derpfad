<template>
  <p class="footer">
    &copy; 2024 EasyWebPath. All rights reserved. As an Amazon Associate, I earn from qualifying purchases.
    <router-link to="/datenschutz">Datenschutz</router-link><span> | </span>
    <router-link to="/impressum">Impressum</router-link><span> | </span>
    <router-link to="/legaldisclosure">Legal Disclosure</router-link><span> | </span>
    <router-link to="/privacypolicy">Privacy Policy</router-link>
  </p>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  color: #139494;
}
</style>