import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

// Modules
import restApi from "./rest-api";

const vuexLocalSession = new VuexPersistence({
  storage: window.sessionStorage,
  modules: ["rest-api"],
});

const store = createStore({
  modules: {
    restApi,
  },
  plugins: [vuexLocalSession.plugin],
});

export default store;
