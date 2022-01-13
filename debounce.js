
export default function debounce(f, time) {
	let wait = false

	return function (...args) {
		if (wait) return

		f.bind(this)(...args)

		wait = true
		setTimeout(() => wait = false, time)
	}
}