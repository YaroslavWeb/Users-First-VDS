<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align-content="center">
      <v-col cols="12" sm="10" md="3">
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>
