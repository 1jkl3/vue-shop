<template>
	<aside class="right-view">
		<div class="article-item">
			<div><a href="#" title="文章"><i class="iconfont">&#xe636;</i><br>写文章</a></div>
			<div><a href="#" title="回答"><i class="iconfont">&#xe619;</i><br>写回答</a></div>
			<div><a href="#" title="想法"><i class="iconfont">&#xe638;</i><br>写想法</a></div>
		</div>
		<div class="creators-item">
			<a href="#" title="我的稍后答">
				<div>
					<i class="iconfont">&#xe738;</i>&nbsp;&nbsp;
					<span>我的稍后答</span>
				</div>
			</a>
			<a href="#" title="草稿">
				<div>
					<i class="iconfont">&#xe697;</i>&nbsp;&nbsp;
					<span>我的草稿</span>
				</div>
			</a>
			<a href="#" title="创作者">
				<div>
					<i class="iconfont">&#xe63f;</i>&nbsp;&nbsp;
					<span>创作者中心</span>
					<span class="right-span">去开通&nbsp;<i class="iconfont">&#xe603;</i></span>
				</div>
			</a>
		</div>
		<div class="Card">
			<ul class="Card-ul">
				<li><a href="#"><i class="iconfont">&#xe62c;</i><br>Live</a></li>
				<li><a href="#"><i class="iconfont">&#xe671;</i><br>书店</a></li>
				<li><a href="#"><i class="iconfont">&#xe608;</i><br>圆桌</a></li>
				<li><a href="#"><i class="iconfont">&#xe604;</i><br>专栏</a></li>
				<li><a href="#"><i class="iconfont">&#xe609;</i><br>付费咨询</a></li>
			</ul>
		</div>
	</aside>
</template>

<script>
	export default {
		name: 'rightView',

	}
</script>

<style>
	.right-view {
		width: 100%;
		height: 100%;
	}

	.article-item {
		height: 60px;
		display: flex;
		align-items: center;
	}

	.article-item div {
		flex: 1;
	}

	.article-item div a {
		width: 100%;
		text-decoration: none;
		color: #444;
		font-weight: 300;
	}

	.article-item i {
		color: #8590a6;
	}

	.creators-item {
		text-align: left;
		height: 180px;
	}

	.creators-item div {
		line-height: 60px;
	}

	.creators-item a {
		font-size: 14px;
		font-weight: 300;
		text-decoration: none;
		color: #8590a6;
	}

	.right-span {
		float: right;
		color: rgb(0, 132, 255);
	}
	.Card{
		box-shadow: 0px 0px 1px #8590a6;
	}
	.Card-ul{
		display: flex;
		flex-flow: wrap;
		list-style: none;
		/* align-content: center; */
		align-items: center;
		padding: 0px;
	}
	.Card-ul li{
		width: 33%;
		padding: 5px 0 5px 0;
	}
	.Card-ul a{
		text-decoration: none;
		color: #8590a6;
	}
	.Card-ul .iconfont{
		font-size: 25px;
	}
</style>
