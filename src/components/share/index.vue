<template>
	<div class="share-view">
		<div class="share-background"></div>
		<div class="share-contrnt">
		    <div class="share-top-tips">
		    	分享到
		    </div>	
		    <ul class="share-icon-list clearfix">
		    	<li v-for="(value, key) in shareData" :key="key" @click="handleAPPShare(value)">
		    		<div class="share-icon" :class="value.className"></div>
		    		<span class="share-icon-title">
		    			{{value.title}}
		    		</span>
		    	</li>
		    </ul>
		    <div class="share-button" @click="SHARE_MASK(false)">
		    	取消
		    </div>
	    </div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'vshare',
  props: {
	  shareInfo: {
		  type: Object,
		  default: function() {
			  return {
				title: '',    
				content: '',  
				imageUrl: '',
				jumpUrl: '',
			  }
		  }
	  }
  },
  data() {
    return {
      shareData: [
		  {title: '朋友圈', className: 'friendCricle', postData: {platform: 'friendCricle'}},
		  {title: '微信好友', className: 'Wechat', postData: {platform: 'Wechat'}},
		//   {title: '微博', className: 'SinaWeibo', postData: {platform: 'SinaWeibo'}},
		//   {title: 'QQ好友', className: 'QQ', postData: {platform: 'QQ'}},
		//   {title: 'QQ空间', className: 'QZone', postData: {platform: 'QZone'}},
	  ]
    }
  },
  methods: {
	...mapActions([
		'SHARE_MASK'
	]),
	// 调取原生分享方法，并传递相应参数   
	handleAPPShare(value) {
		let ua = navigator.userAgent.toLowerCase();
		let sharData = Object.assign({}, value.postData, this.shareInfo);
		console.log(sharData)
		if (/iphone|ipad|ipod/.test(ua)) {
			window.webkit.messageHandlers.jsCall.postMessage({jsAction:'back',jsData:sharData});
		}else if (/android/.test(ua)) {
			window.jsAction.closePage(JSON.stringify(sharData));
		} 
		this.SHARE_MASK(false);
	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.share-view{
	width: 100%;
	position: fixed;
	left:0;
	right:0;
	top:0;
	bottom: 0;
	z-index: 100;
  	.share-background{
	  	background: #000;
	  	opacity: 0.3;
	  	position: fixed;
		z-index: 101;
		left:0;
		right:0;
		top:0;
		bottom: 0;
 	}
 	.share-contrnt{
 		bottom:0;
 		position: fixed;
		z-index: 101;
		width: 100%;
		background: #242424;
		text-align: center;
		.share-top-tips{
			font-size: 0.2rem;
			color: #605F5F;
			letter-spacing: 0;
			
			line-height: 0.2rem;
			margin: 0.2rem 0 0.4rem;
		}
		ul{
			padding:0 0.6rem 0.2rem ;
		}
		li{
			float:left;
			width:1.25rem;
			
			.share-icon-title{
				font-size: 0.24rem;
				color: #AFAFAF;
				line-height: 0.24rem;
			}
			.share-icon{
				height: 0.8rem;
				width: 0.8rem;
				margin:0 auto;
			}
			.QZone{
				background: url(../../assets/share/zone.png) no-repeat;
				background-size: 100% 100%;
			}
			.QQ{
				background: url(../../assets/share/qq.png) no-repeat;
				background-size: 100% 100%;
			}
			.Wechat{
				background: url(../../assets/share/friend.png) no-repeat;
				background-size: 100% 100%;
			}
			.friendCricle{
				background: url(../../assets/share/friends.png) no-repeat;
				background-size: 100% 100%;
			}
			.SinaWeibo{
				background: url(../../assets/share/xinlang.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		.share-button{
			background: #2D2B2C;
			font-size: 0.28rem;
			color: #FFFFFF;
			padding: 0.3rem;
		}
 	}
}
</style>
