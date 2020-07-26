<template>
  <v-snackbar :value="value" @input="hide()">
    {{ text }}
    <template>
      <v-btn color="pink" text @click="hide()">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",
  props: { text: String, value: Boolean },
  methods: {
    hide() {
      this.$emit('input', false)
    }
  }
};
</script>
