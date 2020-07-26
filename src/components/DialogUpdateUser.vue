<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" color="primary" dark v-on="on">
          ИЗМЕНИТЬ
          <v-icon dark right>mdi-wrench</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title style="display:flex; justify-content: space-between;">
          <span class="headline">Изменить пользователя</span>
          <v-checkbox v-model="user.is_hide" label="is_hide"></v-checkbox>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row justify="center">
              <v-col cols="12" sm="5">
                <v-text-field
                  label="Имя"
                  v-model="user.first_name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  label="Фамилия"
                  v-model="user.last_name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field label="Почта" v-model="user.email" required>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text v-on:click="dialog = false"
            >Закрыть</v-btn
          >
          <v-btn color="blue darken-1" text v-on:click="updateUser">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  name: "DialogUpdateUser",
  props: { user: Object },
  data: function() {
    return {
      dialog: false,
    };
  },

  methods: {
    updateUser() {
      this.dialog = false;
      this.$store.dispatch("updateUser", this.user)
    },
  },
};
</script>
