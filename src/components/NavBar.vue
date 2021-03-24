<template>
  <div>
    <ul class="nav">
      <li :class="{active: tab === 'all'}" @click.prevent="changeTab('all')">全部</li>
      <li :class="{active: tab === 'todo'}" @click.prevent="changeTab('todo')">代辦</li>
      <li :class="{active: tab === 'checked'}" @click.prevent="changeTab('checked')">已完成</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["tab"])
  },
  methods: {
    ...mapActions(["changeTab"])
  }
};
</script>

<style lang="scss" scope>
.nav {
  padding: 0 12px;
  display: flex;
  list-style: none;
  & li {
    display: block;
    width: 100%;
    cursor: pointer;
  }
  .active {
    background: #f1f1f1f1;
  }
}
</style>