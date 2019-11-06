function format(str){
	return str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

function giveformat(num) {
	return num > 999 ? (num / 1000) + 'K' : num
}

function overflowtext(text, len) {
	if (text.length <= len) {
		return text + "..."
	} else {
		return text.substring(0, len) + "..."
	}
}
export {format,giveformat,overflowtext}
