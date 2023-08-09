<template>
  <div class="AsideLeft">
    <h1>Métodos HTTPS</h1>
    <router-link class="Option" to="/get" v-slot="{ navigate }"
      ><button class="ButtonMenu" @click="navigate">GET</button></router-link
    >
    <router-link class="Option" to="/post" v-slot="{ navigate }"
      ><button class="ButtonMenu" @click="navigate">CRUD</button></router-link
    >
  </div>
</template>
<style lang="scss">
.AsideLeft {
  background: $light !important;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px repeat(2, 40px);
  gap: 10px;
  list-style: none;
}
.Option {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ButtonMenu {
  border: none;
  border-radius: 10px;
  font-size: medium;
  height: 100%;
  width: 80%;
  text-decoration: none;
  color: $dark;
  background: $text;
  font-weight: bold;
}
.ButtonMenu:hover {
  background: $dark;
  color: $text;
  width: 80%;
}
</style>
