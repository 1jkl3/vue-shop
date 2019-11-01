<template>
  <div class="home">
	  <left-content></left-content>
	  <right-content></right-content>
  </div>
</template>

<script>
import leftContent from '@/components/homechildren/leftContent'
import rightContent from '@/components/homechildren/rightContent'
export default {
  name: 'home',
  components: {
	  leftContent,
	  rightContent
  }
}
</script>
<style>
	.home{
		width: 1000px;
		margin: 0 auto;
		display: flex;
	}
</style>