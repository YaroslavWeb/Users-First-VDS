<template>
  <v-snackbar v-model="value">
    {{ text }}
    <template>
      <v-btn color="pink" text @click="value = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",
  props: { text: String, value: Boolean },
};
</script>
