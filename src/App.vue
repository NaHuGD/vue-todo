<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from './view/Todo';
export default {
  name: 'app',
  components: {
    Todo,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
