import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    msgValue: 'test',
    todoList: [],
  },
  actions: {
    addTodo(context, status) {
      context.commit('ADD_TODO', status);
    },
  },
  mutations: {
    ADD_TODO(state, data) {
      if (state.msgValue) {
        // push代辦到arr中
        state.todoList.push(data);
        // 新增後清空欄位
        state.msgValue = '';
      }
    },
    UPDATE_INPUTE_VALUE(state, data) {
      state.msgValue = data;
    },
  },
  getters: {
    todoList(state) {
      return state.todoList;
    },
    msgValue(state) {
      return state.msgValue;
    },
  },
});
