<template>
  <div id="app">
    <h1 class="text-center">Youtube Search</h1>
    <SearchBar />
    <div class="container">
      <div class="row">
        <div class="col-8">
          <VideoPlayer v-bind:video="selectedVideo" />
        </div>
        <div class="col-4">
          <VideoList v-bind:videos="videos" v-on:imageClicked="imageClicked" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import VideoList from "./components/VideoList.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoPlayer,
    VideoList,
  },
  methods: {
    imageClicked(video) {
      this.selectedVideo = video;
      console.log(video);
    },
  },
};
</script>

<style></style>
