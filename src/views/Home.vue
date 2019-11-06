<template>
  <div class="home">
	  <left-content></left-content>
	  <right-content></right-content>
  </div>
</template>

<script>
import leftContent from '@/components/homechildren/leftContent'
import rightContent from '@/components/homechildren/rightContent'
import {thro,deb} from "@/components/util/IfTheThrottle.js"
export default {
  name: 'home',
  components: {
	  leftContent,
	  rightContent
  },
  methods:{
	  scrollTopdown(){
	  	let scrollTop = document.body.scrollTop||document.documentElement.scrollTop
	  	let scrollHeight = document.body.scrollHeight||document.documentElement.scrollHeight
	  	let windowHeight = window.innerHeight;
	  	if(scrollTop+windowHeight==scrollHeight){
	  		console.log("到底了")
	  	}
	  }
  },
  created(){
	  console.log("created")
	window.addEventListener("scroll",deb(this.scrollTopdown,1000))
  },
  // activated(){
	 //  console.log("activated")
  // },
  // deactivated(){
	 //  console.log("deactivated")
  // }
}
</script>
<style>
	.home{
		width: 1000px;
		margin: 0 auto;
		display: flex;
	}
</style>