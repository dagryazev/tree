<template>
  <div id="search">
    <input type="text" name="search" value="" @input="update_stringSearch" value="" placeholder="Введите значение...">
  </div>
</template>

<script>
export default {
  name: 'search',
  methods: {
    update_stringSearch (e) {
      this.$store.commit("update_stringSearch", e.target.value)
    }
  }
}
</script>

<style>

</style>
