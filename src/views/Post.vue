<template>
  <div class="container">
    <h1>Clientes</h1>

    <form @submit.prevent="addClient">
      <label for="name">Nombre:</label>
      <input id="name" v-model="name" required />
      <label for="email">Correo:</label>
      <input id="email" v-model="email" required />
      <button type="submit">Agregar</button>
    </form>
    <table v-show="clients">
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Acciones</th>
      </tr>
      <tr v-for="client in clients" :key="client.id">
        <td>{{ client.id }}</td>
        <td>{{ client.name }}</td>
        <td>{{ client.email }}</td>
        <td>
          <button @click="editClient(client)">Editar</button>
          <button @click="removeClient(client)">Borrar</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Client } from "./../models/client.model";
import { useStore } from "vuex";

const store = useStore();

const ClientsComputed = computed(() => store.getters["restApi/clients"]);

//actions
const postClient = (data: Client) => store.dispatch("restApi/post", data);
const getClients = () => store.dispatch("restApi/get");
const updateClient = (data: Client) => store.dispatch("restApi/update", data);
const deleteClient = (id: number) => store.dispatch("restApi/delete", id);
// variables reactivas
const name = ref("");
const email = ref("");
const clients = ref<Client[]>([]);

// funtions
const addClient = async () => {
  await postClient({ name: name.value, email: email.value } as Client);
};
const editClient = async (client: Client) => {
  await updateClient(client);
};
const removeClient = async (client: Client) => {
  await deleteClient(client.id);
};

onMounted(async () => {
  await getClients();
  clients.value = await ClientsComputed.value;
});
</script>
