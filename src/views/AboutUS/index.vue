<template>
  <div class="about-us-view">
      <!-- 返回按钮为关闭容器选项，无分享按钮，标题为： 关于我们  -->
			<v-header
      title="关于我们"
			backType="goback"
			></v-header>

      <h1></h1>
      <h2>xxxx</h2>
      <p>{{version}}</p>
      <div class="info">
        <div class="clearfix">
          <p class="fl">微信公众号：<span>{{clipText}}</span></p>
          <p class="fr clip" @click='handleCopy(clipText,$event)'>复制</p>
        </div>
        <div class="clearfix">
          <p class="fl">公司简介</p>
        </div>
      </div>
  </div>
</template>

<script>
import VHeader from '@/components/header'
import clip from '@/lib/clipboard'

export default {
  name: 'aboutUS',
  data() {
    return {
      clipText: 'xxxxx',
      version: ''
    }
  },
  components: {
		VHeader
  },
  created() {
    this.version = this.$route.params.version;
  },
  methods: {
    // 复制按钮的事件，调用 /lib/clipboard 方法库
    handleCopy(text, event) {
      clip(text, event)
    },
    // 跳转到公司介绍页面
    toDetail() {
      this.$router.push({
        name: 'aboutCompany'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.about-us-view{
  width: 100%;
  padding-top: 1.3rem;
  text-align: center;
  h1{
    width: 1.68rem;
    height: 1.68rem;
    margin: 0 auto 0.16rem;
  }
  h2{
    font-size: 0.32rem;
  }
  >p{
    font-size: 0.3rem;
    color: #999;
  }
  .info{
    margin: 1.96rem 0.75rem 0;
    >div{
      border-bottom: 1px solid #d8d8d8;
      margin-top: 0.46rem;
      p{
        line-height: 0.7rem;
        font-size: 0.28rem;
      }
      i{
        width: 0.16rem;
        height: 0.23rem;
        background: url('~_images/icon/right-arraw.png') center no-repeat;
        background-size:100% 100%;
        margin: 0.23rem;
      }
      .clip{
        color: $blue;
      }
    }
  }
}
</style>
