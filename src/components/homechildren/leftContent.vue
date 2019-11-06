<template>
	<div class="left-content">
		<tobstory-tabs @click-tab='tabindex'></tobstory-tabs>
		<home-list-item></home-list-item>
		<home-list-item></home-list-item>
		<home-list-item></home-list-item>
		<home-list-item></home-list-item>
		<div class="abc"></div>
		<div class="abc"></div>
		<div class="abc"></div>
		<div class="abc"></div>
		<div class="abc"></div>
	</div>
</template>

<script>
	import TobstoryTabs from './TobstoryTabs'
	import homeListItem from './homeListItem'
	export default {
		name:'leftContent',
		components:{
			TobstoryTabs,
			homeListItem
		},
		methods:{
			tabindex(index){
				console.log(index)
			}
		}
	}
</script>

<style>
	.left-content{
		flex: 70%;
		box-shadow: 0px 0px 1px #8590a6;
	}
</style>
