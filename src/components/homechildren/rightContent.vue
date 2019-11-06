<template>
	<div class="right-content">
		<right-view></right-view>
	</div>
</template>

<script>
	import rightView from "./rightView"
	export default{
		name:'rightContent',
		components:{
			rightView
		}
	}
</script>

<style>
	.right-content{
		flex: 29%;
		margin-left: 1%;
	}
</style>
