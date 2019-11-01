<template>
	<div class="tobstory-tabs">
		<el-row class='tabs-a'>
			<ul class="tabs-ul">
				<li :class="{avtivetoa:currensometab===0}"><a href="#">推荐</a></li>
				<li :class="{avtivetoa:currensometab===1}"><a href="#">关注</a></li>
				<li :class="{avtivetoa:currensometab===2}"><a href="#">热榜</a></li>
			</ul>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:'TobstoryTabs',
		data(){
			return{
				currensometab:0,
			}
		},
		methods:{
		},
		mounted(){
			let tabs = document.querySelectorAll('.tabs-ul>li>a')
			for(let i=0;i<tabs.length;i++){
				tabs[i].onclick=(e)=>{
					e.preventDefault()
					this.currensometab=i
					this.$emit("click-tab",this.currensometab)
				}
			}
		}
	}
</script>

<style>
	.tobstory-tabs{
		height: 50px;
		line-height: 50px;
	}
	.tabs-ul{
		list-style: none;
		width: 100%;
		height: 100%;
		padding-left: 20px;
	}
	.tabs-ul a{
		float: left;
		text-decoration: none;
		padding-left: 30px;
		color: #000000;
		font-size: 14px;
		font-weight: 350;
	}
	.avtivetoa a{
		color: #0084ff;
	}
</style>
