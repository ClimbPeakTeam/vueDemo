<template>
  <div class="index-view">
    <v-header
    title="首页"
    backType="close"
    ></v-header>
    <button @click="$router.push('/mine')">去我的页面</button>
  </div>
</template>

<script>
import VHeader from '@/components/header'

export default {
  name: 'index',
  data() {
    return {
    }
  },
  mounted() {
    console.log('mounted执行了')
    import(/* webpackChunkName: "lib" */ '@/lib/lib.js').then( (lib) => {
      console.log('lib.js加载完毕', lib)
    })
  },
  components: {
    VHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index-view{
  width: 100%;
}
</style>
