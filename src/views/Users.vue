<template>
  <div>
    <v-row>
      <v-col cols="12" align-self="center">
        <p class="green--text px-4">Количество пользователей: {{ countUsers }}</p>
        <p class="blue--text px-4">Сумма id видимых: {{ sumId }}</p>
        <DialogAddUser class="ml-2" />
      </v-col>
    </v-row>
    <SnackBar :text="snackbarText" v-model="snackbar" />
    <div class="section">
      <div v-for="user in users" :key="user.id">
        <CardUser :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import CardUser from "@/components/CardUser.vue";
import DialogAddUser from "@/components/DialogAddUser.vue";
import SnackBar from "@/components/SnackBar.vue";

export default {
  name: "Users",

  components: {
    CardUser,
    DialogAddUser,
    SnackBar,
  },
  computed: {
    users: function() {
      return this.$store.getters.onlyVisibleUsers;
    },
    sumId: function() {
      return this.$store.getters.sumId
    },
    countUsers: function() {
      return this.$store.getters.onlyVisibleUsers.length;
    }
  },
  data: function() {
    return {
      snackbar: false,
      snackbarText: "",
    };
  },
  methods: {
    onUserHide(user) {
      this.snackbarText = `User ${user.id} was hidden`;
      this.snackbar = true;
      this.$store.dispatch("updateUser", { ...user, hidden: true });
    },
  },
  created: function() {
    this.$watch("users", (newUsers) => {
      newUsers.forEach(user => {
        if (user.is_hide) {
          this.onUserHide(user);
        }
      })
    });
  },
  mounted: function() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style>
.section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
