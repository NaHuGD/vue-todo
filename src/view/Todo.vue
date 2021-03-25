<template>
  <div>
    <input type="text" v-model="msgValue" v-if="timer === 0">
    <input type="text" v-model="msgValue" v-else disabled>
    <input type="button" value="新增代辦" @click.prevent="addTodo(msgValue)" v-if="timer === 0 && msgValue !== ''">
    <input type="button" value="禁止輸入" @click.prevent="addTodo(msgValue)" v-else disabled>
    <div>倒數：{{timer}} 秒</div>
    <NavBar />
    <List />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import NavBar from '../components/NavBar.vue'
import List from '../components/List.vue'

export default {
  components: {
    NavBar,
    List,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['msgValue', 'todoList', 'timer']),
    msgValue: {
      get() {
        return this.$store.state.msgValue;
      },
      set(value) {
        this.$store.commit('UPDATE_INPUTE_VALUE', value);
      },
    },
  },
  methods: {
    ...mapActions(['addTodo', 'setTimer']),
  },
};
</script>
