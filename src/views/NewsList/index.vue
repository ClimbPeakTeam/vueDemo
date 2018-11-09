<template>
  <div class="seller-info-view">
      <!-- 返回按钮为关闭容器选项，无分享按钮，标题为： 商家介绍  -->
      <v-header
      title="资讯列表"
      backType="goback"
      ></v-header>

     <div class="seller-info-detial">
     	{{info}}
     </div>
  </div>
</template>

<script>
import VHeader from '@/components/header'

export default {
  name: 'newslist',
   data() {
    return {
        info: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/scss">
.seller-info-view{
  width: 100%;
  height: 100%;
  .seller-info-detial{
  	@include detial;
  }
}
</style>
