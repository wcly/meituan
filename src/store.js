import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: {},
    userName: '',
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    },
    setUserName(state, val) {
      state.userName = val;
    }
  },
  actions: {
    setPosition(state, val) {
      // 异步请求获取当前位置数据
      state.commit("setPosition", val);
    }
  }
});
