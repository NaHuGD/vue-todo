<template>
  <div>
    <ul class="list" v-if="tab === 'all'">
      <li
        v-for="(item, key) in todoList"
        :key="item,key"
        :class="{checked: item.schedule}"
        @click.prevent="checkTodo(key)"
      >
        {{item.value}}
        <span @click.prevent.stop="deleteTodo(key)">Clear</span>
      </li>
    </ul>
    <ul class="list" v-if="tab === 'todo'">
      <li
        v-for="(item, key) in todoList"
        v-if="!item.schedule"
        :key="item,key"
        :class="{checked: item.schedule}"
        @click.prevent="checkTodo(key)"
      >
        {{item.value}}
        <span @click.prevent.stop="deleteTodo(key)">Clear</span>
      </li>
    </ul>
    <ul class="list" v-if="tab === 'checked'">
      <li
        v-for="(item, key) in todoList"
        v-if="item.schedule"
        :key="item,key"
        :class="{checked: item.schedule}"
        @click.prevent="checkTodo(key)"
      >
        {{item.value}}
        <span @click.prevent.stop="deleteTodo(key)">Clear</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(['todoList', 'tab']),
  },
  methods: {
    ...mapActions(['deleteTodo', 'checkTodo']),
  },
}
</script>

<style lang="scss" scope>
.list {
  padding: 12px;
  li {
    padding: 12px 8px 12px 40px;
    position: relative;
    list-style: none;
    display: flex;
    cursor: pointer;
  }
  & li:nth-child(odd) {
    background: #eee;
  }
  & li:nth-child(even) {
    background: #f9f9f9;
  }
  & span {
    position: absolute;
    z-index: 1;
    right: 6px;
  }
}
.list li.checked {
  text-decoration: line-through;
  background: #666;
  color: white;
}
</style>
