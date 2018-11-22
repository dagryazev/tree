<template>
  <div id="tree">
    <h1>Дерево элементов</h1>
    <button type="button" name="postBlock" v-on:click="addBlock()">Добавить элемент</button>
      <div class="tree">
        <ul class="tree-list">
          <blockTree :node="getTree()"></blockTree>
        </ul>
      </div>
  </div>
</template>

<script>
import blockTree from './block.vue'

export default {
  name: 'tree',
    components: {
    blockTree
  },
  methods: {
    addBlock: function() {
      this.$store.commit( 'postBlock', parseInt( Math.random() * 1000 ) );
    },
    getTree: function() {
      console.log(this.$store.getters.getPathChild);
      return this.$store.getters.getPathChild;
    }
  }
}
</script>

<style>
* {
  font-family: sans-serif;
}
ul {
  padding-left: 50px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
}
ul li {
  list-style-type: none;
  display: inline-flex;
  min-width: 100px;
  max-width: 100px;
  min-height: 50px;
  align-items: center;
  border: 2px solid #fff;
  background-color: #f2bc8f;


}
</style>
