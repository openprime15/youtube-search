<template>
  <div id="app">
    <h1>Youtube Search</h1>
    <SearchBar @textInput="input" v-bind:results="results" />
    <div id="app2">
      <VideoPlayer v-bind:results="results" />
      <VideoList v-bind:results="results" />
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoPlayer,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    input(userInput) {
      // 1. 입력된 검색어를 가지고,
      const baseUrl = "https://www.googleapis.com/youtube/v3/search";
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
      //   'https://www.googleapis.com/youtube/v3/search?part=snippet&q=multicampus&key=AIzaSyAGE_B9w43hjBq1pqj6cjFdKsfy_HcJwQk'
      // 2. Youtube API에 요청을 보내어
      axios
        .get(baseUrl, {
          params: {
            //key, part, q
            key: API_KEY,
            part: "snippet",
            type: "video",
            q: userInput,
            maxResults: 10,
          },
        })
        // 3. 검색어로 검색한 결과를 가져옴
        .then((response) => {
          console.log(userInput);
          console.log(response.data.items);
          this.results = response.data.items;
        })
        .catch();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app2 {
  display: flex;
}
</style>
