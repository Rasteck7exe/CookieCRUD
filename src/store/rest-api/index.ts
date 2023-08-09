import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
const state = {
  clients: [],
};
export default {
  namespaced: true,
  name: "rest-api",
  state,
  getters,
  mutations,
  actions,
};
