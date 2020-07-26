<template>
  <v-row justify="start">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">
          ДОБАВИТЬ
          <v-icon dark right>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title style="display:flex; justify-content: space-between;">
          <span class="headline">Добавление пользователя</span>
          <v-checkbox label="is_hide" v-model="is_hide"></v-checkbox>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row justify="center">
              <v-col cols="12" sm="5">
                <v-text-field
                  label="Имя"
                  v-model="first_name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  label="Фамилия"
                  v-model="last_name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field label="Почта" v-model="email" required>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text v-on:click="dialog = false">
            Закрыть
          </v-btn>
          <v-btn color="blue darken-1" text v-on:click="addUser">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "DialogAddUser",
  data: () => {
    return {
      dialog: false,
      first_name: null,
      last_name: null,
      is_hide: false,
      email: null,
    };
  },
  methods: {
    addUser() {
      this.dialog = false;
      this.$store.dispatch("addUser", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        is_hide: this.is_hide,
        hidden: false,
      })
        this.first_name = null
        this.last_name = null
        this.email = null
        this.is_hide = false
    },
  },
};
</script>
