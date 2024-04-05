import Vue from 'vue';
import Vuex from 'vuex';
import {getUsers} from "@/api/users";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id.value === id)
    }
  },
  mutations: {
    setUsers (state, users) {
      state.users = users;
    }
  },
  actions: {
    async getUsers({commit}) {
      const { data } = await getUsers();

      if(data) {
        commit('setUsers', data.results);
      }
    }
  }
})

export default store;