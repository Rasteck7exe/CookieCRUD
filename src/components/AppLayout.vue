<template>
  <div class="AppLayout">
    <Sidebar />
    <Main />
  </div>
</template>
<script setup lang="ts">
import Sidebar from "./../components/Sidebar.vue";
import Main from "./../components/Main.vue";
</script>
<style>
.AppLayout {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
}

@media (min-width: 768px) {
  .AppLayout {
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
