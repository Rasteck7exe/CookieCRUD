import {
  createClient,
  getClients,
  updateClient,
  deleteClient,
} from "../../services/api";
import { SET_CLIENTS } from "./mutation-types";
import { Client } from "./../../models/client.model";
export default {
  async post({ state }: any, client: Client) {
    try {
      const newClient = await createClient(client.name, client.email);
      state.clients.push(newClient);
      return newClient;
    } catch (error) {
      console.error(error);
    }
  },
  async get({ commit }: any) {
    try {
      const clients = await getClients();
      return commit(SET_CLIENTS, clients);
    } catch (error) {
      console.error(error);
    }
  },
  async update({ state }: any, client: Client) {
    try {
      const updatedClient = await updateClient(
        client.id,
        client.name,
        client.email
      );
      //update state
      const index = state.clients.findIndex(
        (client: Client) => client.id === updatedClient.id
      );
      state.clients.splice(index, 1, updatedClient);
    } catch (error) {
      console.error(error);
    }
  },
  async delete({ state }: any, id: number) {
    try {
      await deleteClient(id);
      const index = state.clients.findIndex(
        (client: Client) => client.id === id
      );
      state.clients.splice(index, 1);
    } catch (error) {
      console.error(error);
    }
  },
};
