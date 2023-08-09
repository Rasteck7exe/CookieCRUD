<template>
  <div class="container">
    <h1>GET/READ</h1>
    <table v-show="clients">
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Correo</th>
      </tr>
      <tr v-for="client in clients" :key="client.id">
        <td>{{ client.id }}</td>
        <td>{{ client.name }}</td>
        <td>{{ client.email }}</td>
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

onMounted(async () => {
  await getClients();
  clients.value = await ClientsComputed.value;
});
</script>
