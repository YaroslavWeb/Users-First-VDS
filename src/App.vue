<template>
  <v-app>
    <v-app-bar app color="primary white--text">
      <div class="text-h4 font-weight-light">FirstVDS USERS</div>
      <sup>Vue</sup>
      <v-spacer></v-spacer>
      <div class="text-h6 font-weight-thin">
        <v-btn large color="error" :disabled="!isAuth" v-on:click="logout">
          ВЫХОД
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view v-if="isAuth"/>
      <Login v-else/>
    </v-main>
  </v-app>
</template>

<script>
import Login from "@/views/Login.vue";

export default {
  name: "App",

  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  created: function() {
    if (!this.isAuth) {
      this.$router.push("login");
    }
  },

  components: {
    Login
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("login")
      });
    },
  },
};
</script>
