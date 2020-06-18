import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // data 저장소, 유사 data
    userInput: "",
    videos: [],
    selectedVideo: null,
  },
  getters: {
    // 유사 computed
    videos(state) {
      return state.videos;
    },
    selectedVideo(state) {
      return state.selectedVideo;
    },
  },
  mutations: {
    // $store.commit('함수명',data)
    // data를 변경시키는 로직, 유사 methods(동기적)
    // mutations 호출 방법: $store.commit('함수명')
    setUserInput(state, data) {
      console.log("setUserInput 함수입니다", state);
      state.userInput = data;
    },
    setVideos(state, data) {
      // state.userInput을 가지고 axios 요청을 보내기
      // state.videos 데이터를 변경시킨다.
      state.videos = data;
    },
    setSelectedVideo(state, data) {
      state.selectedVideo = data;
    },
  },
  actions: {
    // data를 변경 + 비동기적, 유사 methods(mutations+비동기적)
    getVideos(context, event) {
      context.commit("setUserInput", event.target.value);

      // 1. 입력된 검색어를 가지고,
      const baseURL = "https://www.googleapis.com/youtube/v3/search";
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

      // 2. Youtube API에 요청을 보내어
      axios
        .get(baseURL, {
          params: {
            // key, part, q
            key: API_KEY,
            part: "snippet",
            type: "video",
            q: context.state.userInput,
            maxResults: 10,
          },
        })
        .then((response) => {
          console.log(response.data.items);
          context.commit("setVideos", response.data.items);
        });
      // 3. 검색어로 검색한 결과를 가져옴
      console.log("검색어 입력 되었음");
    },
  },
  modules: {},
});
