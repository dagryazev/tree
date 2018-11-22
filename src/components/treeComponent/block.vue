<template>
  <li class="block__tree" :class="{ active: node.value == this.$store.getters.stringSearch}">
    <div class="value">{{ node.value }}</div>

    <ul v-if="node.children && node.children.length">
      <node v-for="child of node.children" :node="child"></node>
    </ul>
  </li>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object
  }
};
</script>

<style>
div.value {
  min-width: 100%;
  display: block;
  text-align: center;
}
li.block__tree.active{
  transition: 0.25s linear;
  background-color: #8B0000;
  color: #fff;
}
</style>
