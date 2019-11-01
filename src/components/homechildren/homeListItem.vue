<template>
	<div class="home-list-item">
		<div class="list-p">
			<p><a href="#">半个月整理65套spring面试题，答案全在这里了</a></p>
		</div>
		<div class="list-span">
			<span>das:</span><span v-html="txt"></span>
			<button class="list-btn">阅读全文&nbsp;<i class="iconfont" style="font-size: 12px;">&#xe600;</i></button>	
		</div>
		<div class="list-control">
			
		</div>
	</div>
</template>

<script>
	export default {
		name:'homeListItem',
		data(){
			return {
				text:" <b>这段时间里</b>，我为大家准备了一大批Java相关面试题，学习资料，在这里先分享给大家我整理的65道spring面试题 1. 什么是spr	Spring 是个java企业级应用的开源开发框架。Spring主要用来开发Java应用，但是有些扩展是针对构建J2EE平台的web应"
			}
		},
		computed:{
			txtlen:function(){
				return this.text.length
			},
			txt:function(){
				return this.overflowtext(this.text,75)
			}
		},
		methods:{
			overflowtext(text,len){
				if(this.txtlen<=len){
					return text+"..."
				}else{
					return text.substring(0,len)+"..."
				}
			}
		}
	}
</script>

<style>
	.home-list-item{
		text-align: left;
		padding: 20px;
	}
	.list-p{
		font-weight: bold;
	}
	.list-p p a{
		color: #000000;
		text-decoration: none;
	}
	.list-p p :hover{
		color: #000080;
	}
	.list-span{
		cursor: pointer;
	}
	.list-span:hover{
		color: #8590a6;
	}
	.list-btn{
		border: none;
		background: white;
		color: #0084ff;
		cursor: pointer;
	}
	.list-btn:hover{
		color: #8590a6;
	}
</style>
