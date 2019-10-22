<template>
	<div class="nav">
		<el-row>
			<el-col :span='24'>
				<span>我是一个标题</span>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'tar',
		data(){
			return {
				activeIndex: '1',
				activeIndex2: '1'
			}
		},
		methods:{
			// handleSelect(key, keyPath) {
			//     console.log(key, keyPath);
			// }
		}
	}
</script>

<style>
	.nav{
		margin: 0px;
	}
</style>
