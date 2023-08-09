<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <AppLayout />
</template>

<script setup lang="ts">
import AppLayout from "./components/AppLayout.vue";
</script>

<style lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: $text;
}
body {
  margin: 0;
  background: $dark;
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
}
table {
  margin: 10px auto;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid $light;
}

form {
  margin: 10px auto;
  width: 300px;
}

label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  font-family: Arial, sans-serif;
  font-size: 16px;
}
</style>
