import { SET_CLIENTS } from "./mutation-types";
import { Client } from "../../models/client.model";
export default {
  [SET_CLIENTS](state: any, clients: Array<Client>) {
    state.clients = clients;
  },
};
