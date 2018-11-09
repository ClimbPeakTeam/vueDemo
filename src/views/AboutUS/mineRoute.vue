<template>
  <div class="mine-router-view">
      <!-- add common view -->
      <router-view></router-view>
      <!-- add common view -->
  </div>
</template>

<script>

export default {
  name: 'mineRouter',
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mine-router-view{
  width: 100%;
  height: 100%;
}
</style>
