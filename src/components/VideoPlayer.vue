<template>
  <div class="embed-responsive embed-responsive-16by9" v-if="selectedVideo">
    <iframe
      class="embed-responsive-item"
      :src="`https://www.youtube.com/embed/${selectedVideo.id.videoId}`"
    ></iframe>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VideoPlayer",
  computed: {
    ...mapGetters(["selectedVideo"]),
  },
};
</script>

<style></style>
