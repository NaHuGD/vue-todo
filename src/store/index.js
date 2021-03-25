import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    msgValue: 'test',
    // tab頁籤 all/todo/checked
    tab: 'all',
    timer: 0,
    todoList: [
      {
        value: 'test111',
        schedule: false,
      },
      {
        value: 'test222',
        schedule: true,
      }
    ],
  },
  actions: {
    addTodo(context, status) {
      context.commit('ADD_TODO', status);
      // 新增時處發計時
      store.dispatch('setTimer', 8)
    },
    deleteTodo(context, status) {
      context.commit('DELETE_TODO', status);
    },
    checkTodo(context, status) {
      context.commit('CHECK_TODO', status);
    },
    changeTab(context, status) {
      // 更換頁籤
      context.commit('CHANGE_TAB', status);
    },
    setTimer(context, time) {
      // action處理非同步timer
      for (let i = 0; i <= time; i++) {
        setTimeout(() => {
          let currentTimer = time - i
          context.commit('SET_TIMER', currentTimer);
        }, 1000 * i)
      }
    }
  },
  mutations: {
    ADD_TODO(state, data) {
      // 新增後五秒後才能再新增
      if (state.msgValue && state.timer === 0) {
        const objData = {
          value: data,
          schedule: false,
        }
        // push代辦到arr中
        state.todoList.push(objData);
        // 新增後清空欄位
        state.msgValue = '';
      }
    },
    UPDATE_INPUTE_VALUE(state, data) {
      // setter更新input欄位
      state.msgValue = data;
    },
    DELETE_TODO(state, key) {
      state.todoList.find((item, index) => {
        // 條件符合則刪除
        if (index === key) state.todoList.splice(index, 1);
      })
    },
    CHECK_TODO(state, data) {
      state.todoList.find((item, index) => {
        if (index === data) state.todoList[index].schedule = !state.todoList[index].schedule;
      })
    },
    CHANGE_TAB(state, data) {
      state.tab = data;
    },
    SET_TIMER(state, time = 5) {
      state.timer = time;
    },
  },
  getters: {
    todoList(state) {
      return state.todoList;
    },
    msgValue(state) {
      return state.msgValue;
    },
    tab(state) {
      return state.tab;
    },
    timer(state) {
      return state.timer;
    }
  },
});

export default store