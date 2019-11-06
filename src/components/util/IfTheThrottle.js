//节流
function thro(fn, wait) {
	let timer;
	return function() {
		const than = this
		var arg = arguments
		if (!timer) {
			timer = setTimeout(function() {
				fn.apply(than, arg)
				timer = null
			}, wait)
		}
	}
}
//防抖
function deb(func, wait) {
	let timer;
	return function() {
		const then = this
		let arg = arguments
		if (timer) clearInterval(timer)
		// let callnow=!timer
		timer = setTimeout(() => {
			// timer=null
			func.apply(then, arg)
		}, wait)
		// if(callnow) func.apply(then,arg)
	}
}

export {thro,deb}
