import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    ad: {},
    auth: {
      token: localStorage.getItem("token"),
      isAuth: localStorage.getItem("isAuth"),
    },
  },

  getters: {
    users: (state) => state.users,
    onlyVisibleUsers: (state) => state.users.filter((user) => !user.hidden),
    ad: (state) => state.ad,
    isAuth: (state) =>
      state.auth.isAuth === true || state.auth.isAuth === "true",
    sumId: (state) => {
      let res = state.users.filter((user) => !user.hidden).map(user => user.id);
      if (res.length) {
        return res.reduce((sum, id) => {
          return sum + id;
        });
      }
      return 0;
    },
  },

  mutations: {
    "@@USERS/SET": (state, users) => {
      state.users = users;
    },
    "@@AUTH/SET_TOKEN": (state, token) => {
      state.auth.token = token;
      state.auth.isAuth = Boolean(token);
      localStorage.setItem("token", token);
      localStorage.setItem("isAuth", Boolean(token));
    },
    "@@USER/UPDATE": (state, user) => {
      const idx = state.users.findIndex((x) => x.id == user.id);

      if (idx > -1) {
        state.users.splice(idx, 1, user);
      }
    },
    "@@USER/ADD": (state, user) => {
      state.users.unshift({ ...user });
    },
    "@@AD/SET": (state, ad) => {
      state.ad = ad;
    },
  },

  actions: {
    getUsers(context) {
      fetch(`https://reqres.in/api/users?page=1`)
        .then((response) => response.json())
        .then((res) => {
          context.commit("@@USERS/SET", res.data);
          context.commit("@@AD/SET", res.ad);
        })
        .catch(console.log);
    },
    login(context, payload) {
      return fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.token) {
            context.commit("@@AUTH/SET_TOKEN", res.token);
          } else {
            throw new Error(res.error);
          }
        });
    },

    logout(context) {
      context.commit("@@AUTH/SET_TOKEN", null);
    },

    updateUser(context, user) {
      fetch(`https://reqres.in/api/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then(() => context.commit("@@USER/UPDATE", user))
        .catch(console.log);
    },

    addUser(context, user) {
      fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((res) => {
          user.id = +res.id;
          user.avatar = "https://clck.ru/Psu7a";
          context.commit("@@USER/ADD", user);
        });
    },
  },
});
