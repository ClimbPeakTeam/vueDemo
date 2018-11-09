<template>
  <div class="news-detail-view">
      <!-- 返回按钮为关闭容器选项，有分享按钮，标题为： 资讯详情  -->
      <v-header
      v-if="params.showNav != 'noNav'"
      title="资讯详情"
      backType="close"
      :shareIcon="true"
      ></v-header>
      
      <h1 class="news-detail-title">
      	 {{backMsg.informationName}}
      </h1>
      <h2 class="news-detail-title2">
      	{{backMsg.informationTime | time}}
      </h2>
      <div class="news-detail-detial"  v-html="backMsg.informationContent">
      </div>

      <!-- 分享按钮组件 -->
      <transition name="fade">
        <v-share
        v-if="shareMask"
        :shareInfo="shareInfo"
        ></v-share>
      </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VHeader from '@/components/header'
import VShare from '@/components/share'
import { newsDetailApi } from '@/axios/modules/newsList'

export default {
  name: 'newsDetail',
  data() {
    return {
      shareInfo: {
          title: '我是新闻详情',    
          content: '我是分享的描述',  
          imageUrl: 'htpp://127.0.0.1:3000/img.png',
          jumpUrl: '',
      },
      backMsg: {
        title: '',
        createTime: '',
        content: ''
      },
      params:{}
    }
  },
  computed: {
    ...mapGetters([
      'shareMask'
    ])
  },
  components: {
    VHeader,
    VShare,
  },
  created() {
    // 获取路由的params newsId为新闻的id， 通过url传递新闻id进行页面数据的获取
    this.params = this.$route.params;
    newsDetailApi({id: this.params.newsId}).then( res => {
      console.log(res);
      this.backMsg = res.data;
      this.shareInfo.title = this.backMsg.informationName;
      this.shareInfo.content = this.backMsg.copywriter;
    })
    this.shareInfo.jumpUrl = `${document.location.protocol}//${document.location.host}/#/newsList/newsDetail/noNav/${this.$route.params.newsId}`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.news-detail-view{
  width: 100%;
  height: 100%;
 
  .news-detail-title{
  	font-size: 0.36rem;
		color: #383838;
		line-height: 0.36rem;
		text-align: center;
		padding:0.55rem  0.33rem 0;
  }
  h2{
  	font-size: 0.28rem;
		color: #888888;
		text-align: left;
		line-height: 0.28rem;
		 padding:0.3rem 0.33rem;
  }
  .news-detail-detial{
  	font-size: 0.28rem;
		color: #383838;
		text-align: justify;
		line-height: 0.48rem;
		padding:0rem 0.33rem;
		img{
			width:100%;
			padding:0.2rem 0.33rem;
		}
  }
 
}
</style>
