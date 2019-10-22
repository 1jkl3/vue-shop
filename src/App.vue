<template>
  <div id="app">
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
  color: #2c3e50;
}

.nav {
  padding: 0px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
