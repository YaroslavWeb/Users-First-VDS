<template>
  <div v-if="!user.is_hide" class="card">
    <DialogUpdateUser :user="{ ...user }" />
    <img class="avatar" :src="user.avatar" />
    <div>
      <p>{{ user.email }}</p>
      <p>{{ user.last_name + " " + user.first_name }}</p>
      <p>{{ ad.company }}</p>
    </div>
  </div>
</template>

<script>
import DialogUpdateUser from "@/components/DialogUpdateUser";

export default {
  name: "CardUser",
  components: {
    DialogUpdateUser,
  },

  props: { user: Object, ad: Object },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 17rem;
  height: 23rem;
  border: 1px solid gray;
  padding: 1rem;
  margin: 1rem;
}

.avatar {
  border-radius: 100%;
}
</style>
