<template>
	<div id="app" ref='app'>
		<el-header>
			<tar></tar>
		</el-header>
		<el-main>
			<up-title />
			<router-view />
		</el-main>
	</div>
</template>
<script>
	import tar from './components/navtar/Tar.vue'
	import upTitle from './components/contextup/upTitle'
	export default {
		name: 'app',
		components: {
			tar,
			upTitle
		},
		mounted() {
			this.app = this.$refs.app
			// console.log(this.app)
		}
	}
</script>
<style>
	body {
		margin: 0px;
		padding: 0px;
	}

	#app {
		text-align: center;
	}
</style>
