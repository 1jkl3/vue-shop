<template>
  <div id="app" ref='app'>
	  <el-header>
		<tar></tar>
	  </el-header>
	  <el-main>
		<router-view/>
	  </el-main>
  </div>
</template>
<script>
	import tar from './components/navtar/Tar.vue'
	export default {
		name:'app',
		components:{
			tar
		},
		mounted(){
			this.app=this.$refs.app
			console.log(this.app)
		}
	}
</script>
<style>
body{
	margin: 0px;
	padding: 0px;
}
#app {
  text-align: center;
}

</style>
