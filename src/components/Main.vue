<template>
  <div class="MainRight">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <router-view />
  </div>
</template>
<style lang="scss">
.MainRight {
  background: $light !important;
  color: map-get($text-gray, 800) !important;
  margin: 50px;
  padding: 20px 100px;
  border-radius: 10px;
  color: map-get($text-gray, 200) !important;
}
@media screen and (max-width: 768px) {
  .MainRight {
    margin: 10px;
    padding: 10px 20px;
  }
}
.heigthButton {
  height: 50px !important;
}
.input {
  width: 300px;
  height: 40px;
  border: none;
  border-bottom: 2px solid $primary;
  background: map-get($text-gray, 300) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: $secondary;
  padding: 10px;
}
.input:hover {
  color: map-get($text-gray, 500) !important;
}
.input::selection {
  background: $secondary;
  color: $primary;
}
</style>
