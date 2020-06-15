<template>
  <div>
    <input @keypress.enter="textInput" v-model="userInput" type="text" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      userInput: "",
    };
  },
  props: {
    results: Array,
  },

  methods: {
    textInput() {
      this.$emit("textInput", this.userInput);
    },
  },
};
</script>

<style></style>
