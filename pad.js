
const pad = (n, width) => {

	let s = n + ''

	return s.length >= width
		? s
		: new Array(width - s.length + 1).join('0') + s
}

export default pad
