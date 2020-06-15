<template>
  <div>
    <div v-for="result in results" v-bind:key="result.id.videoId" id="app3">
      <img v-bind:src="result.snippet.thumbnails.default.url" />
      {{ result.snippet.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoList",
  props: {
    results: Array
  }
};
</script>

<style>
#app3 {
  float: left;
}
</style>
