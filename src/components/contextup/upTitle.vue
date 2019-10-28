<template>
	<div class="up-title">
		<div class="offer-top" :class="{offeractive:isactive}">
			<button><i class="iconfont">&#xe621;</i></button>
		</div>
		<transition name="up-title">
			<div class="back-up" v-if="isup">
				<button @click="upclick"><i class="iconfont">&#xe666;</i></button>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'upTitle',
		data() {
			return {
				isup: false,
				isactive: true,
				scrollTop: 0
			}
		},
		methods: {
			btncontrl() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if (this.scrollTop > 1000) {
					this.isup = true
					this.isactive = false
				} else {
					this.isup = false
					this.isactive = true
				}
			},
			upclick() {
				let timer = setInterval(() => {
					let ispeed = Math.floor(-this.scrollTop / 20)
					document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
					if (this.scrollTop <= 0) {
						clearInterval(timer)
					}
				}, 0)
			}
		},
		mounted() {
			window.addEventListener('scroll', this.btncontrl)
		},
		destroyed() {
			window.removeEventListener('scroll', this.btncontrl)
		}
	}
</script>

<style>
	.up-title {
		position: fixed;
		bottom: 30px;
		right: 30px;
		height: 90px;
		width: 40px;
		overflow: hidden;
	}

	.up-title div {
		height: 45%;
		width: 100%;
	}

	.up-title button {
		border: 0rem;
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		background: white;
		outline: none;
		border-radius: 5px;
		text-align: center;
	}

	.up-title .iconfont {
		font-size: 25px;
		color: #8590a6;
	}

	.offer-top {
		margin-bottom: 5px;
	}

	.offer-top button:hover,
	.back-up button:hover {
		color: #8590a6;
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.offeractive {
		position: relative;
		top: 40px;
	}

	.abc {
		width: 500px;
		height: 1000px;
	}

	.up-title-enter {
		position: relative;
		top: 40px;
	}
	.up-title-enter-active,
	.up-title-leave-active {
		transition: all .2s;
		transform: translateY(40px);
	}
</style>
