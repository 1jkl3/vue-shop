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
			<div class="accept-btn">
				<button class="control-ok-btn" :class="{activeOkBtn:state}" @click="acticlicknum"><i class="iconfont">&#xe622;</i>{{giveif()}}</button>&nbsp;
				<button class="control-no-btn"><i class="iconfont">&#xe60c;</i></button>
			</div>
			<div class="comment-btn">
				<button class="control-comment-btn"><i class="iconfont">&#xe626;</i> {{peoplenum}} 条评论</button>
				<button class="control-comment-btn"><i class="iconfont">&#xe602;</i> 分享</button>
				<button class="control-comment-btn"><i class="iconfont">&#xe606;</i> 收藏</button>
				<button class="control-comment-btn"><i class="iconfont">&#xe601;</i> 感谢</button>
				<button class="control-comment-btn"><i class="iconfont">&#xe60e;</i></button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		format,
		giveformat,
		overflowtext
	} from "@/components/util/gloatformat.js"
	export default {
		name: 'homeListItem',
		data() {
			return {
				people:1248,
				state: false,
				givenum: 124,
				text: " <b>这段时间里</b>，我为大家准备了一大批Java相关面试题，学习资料，在这里先分享给大家我整理的65道spring面试题 1. 什么是spr	Spring 是个java企业级应用的开源开发框架。Spring主要用来开发Java应用，但是有些扩展是针对构建J2EE平台的web应"
			}
		},
		computed: {
			txt: function() {
				return overflowtext(this.text, 75)
			},
			peoplenum:function(){
				return format(""+this.people)
			}
		},
		methods: {
			giveif() {
				if (this.state) {
					return '已赞同 ' + giveformat(this.givenum)
				} else {
					return '赞同 ' + giveformat(this.givenum)
				}
			},
			acticlicknum() {
				let num = 0
				this.state = !this.state
				if (this.state) {
					this.givenum++
				} else {
					this.givenum--
				}
			}
		}
	}
</script>

<style>
	.home-list-item {
		text-align: left;
		padding: 20px;
	}

	.list-p {
		font-weight: bold;
	}

	.list-p p a {
		color: #000000;
		text-decoration: none;
	}

	.list-p p :hover {
		color: #000080;
	}

	.list-span {
		cursor: pointer;
	}

	.list-span:hover {
		color: #8590a6;
	}

	.list-btn {
		outline: none;
		border: none;
		background: white;
		color: #0084ff;
		cursor: pointer;
	}

	.list-control {
		float: left;
	}

	.accept-btn {
		float: left;
	}

	.comment-btn {
		float: left;
		padding-left: 25px;
	}

	.list-btn:hover {
		color: #8590a6;
	}

	.control-ok-btn,
	.control-no-btn {
		outline: none;
		height: 30px;
		color: #0084ff;
		background-color: rgba(0, 132, 255, .1);
		cursor: pointer;
		border-color: transparent;
	}

	.control-comment-btn {
		height: 30px;
		outline: none;
		cursor: pointer;
		border-color: transparent;
		background-color: transparent;
		color: #8590a6;
		font-size: 12px;
	}

	.activeOkBtn {
		background: #0084ff;
		color: white;
	}
</style>
