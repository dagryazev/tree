<template>
  <div id="app">
    <search></search>
    <tree></tree>
  </div>
</template>

<script>
import tree from './components/treeComponent/tree.vue';
import search from './components/search.vue';

export default {
  name: 'app',
  components:{ tree, search}

}
</script>

<style>

</style>
