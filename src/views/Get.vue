<template>
  <div class="container">
    <h1>GET</h1>
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
const getClients = () => store.dispatch("restApi/get");
const updateClient = (data: Client) => store.dispatch("restApi/update", data);
const deleteClient = (id: number) => store.dispatch("restApi/delete", id);
// variables reactivas
const clients = ref<Client[]>([]);

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
