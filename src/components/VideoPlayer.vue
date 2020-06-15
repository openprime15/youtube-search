<template>
  <div v-if="results.length > 0">
    <iframe
      v-bind:src="'https://www.youtube.com/embed/' + results[0].id.videoId"
      width="560"
      height="315"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: { results: Array },
};
</script>

<style></style>
