<template>
  <div>
    <img
      :src="video.snippet.thumbnails.default.url"
      v-on:click="imageClicked"
    />
    <h5>{{ video.snippet.title }}</h5>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: Object,
  },
  methods: {
    imageClicked() {
      this.$emit("imageClicked", this.video);
      this.$store.commit("setSelectedVideo", this.video);
    },
  },
};
</script>

<style></style>
