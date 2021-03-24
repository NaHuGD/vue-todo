<template>
  <div>
    <input type="text" v-model="msgValue">
    <input type="button" value="新增代辦" @click.prevent="addTodo(msgValue)">
    <ul>
      <li v-for="(item, key) in todoList" :key="key" id="list">{{item}}<span>Close</span></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      inputValue: '',
    };
  },
  computed: {
    ...mapGetters(['msgValue', 'todoList']),
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
    ...mapActions(['addTodo']),
  },
};
</script>

