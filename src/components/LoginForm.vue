<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Авторизация</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          label="Почта"
          name="email"
          prepend-icon="mdi-email"
          type="text"
          required>
        </v-text-field>
        <v-text-field
          v-model="password"
          label="Пароль"
          name="password"
          type="password"
          prepend-icon="mdi-lock"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <p class='red--text px-4'>{{ error }}</p>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" v-on:click="submit">Войти</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    source: String,
  },

  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },

  methods: {
    submit() {
      this.$store
        .dispatch("login", {email: this.email, password: this.password})
        .then(() => {
          this.$router.push("users");
        })
        .catch((e) => {
          this.error = e;
        });
    },
  },
};
</script>
