import { createStore } from "vuex";

const localStorageKey =
  "DJsdfg-2352LLDSF-dfgfgiu38r_[22334ews34>YUVASZghsvdV--345";

export default createStore({
  state: {
    isAuthenticated: false,
    username: "",
    userId: "",
    email: "",
    role: "",
    productDetail: {},
    orderDetail: {},
    trolley: [],
  },
  getters: {},
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setUsername(state, value) {
      state.username = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setUserId(state, value) {
      state.userId = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setEmail(state, value) {
      state.email = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setProductDetail(state, value) {
      state.productDetail = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setOrderDetail(state, value) {
      state.orderDetail = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setTrolley(state, value) {
      state.trolley = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    setRole(state, value) {
      state.role = value;
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    // Agregar una mutación para inicializar el estado desde localStorage al cargar la página
    initializeStateFromLocalStorage(state) {
      const storedState = localStorage.getItem(localStorageKey);
      if (storedState) {
        Object.assign(state, JSON.parse(storedState));
      }
    },
  },
  actions: {
    initializeStateFromLocalStorage({ commit }) {
      commit("initializeStateFromLocalStorage");
    },
  },
});
