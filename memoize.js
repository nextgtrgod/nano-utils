
let memoize = fn => {
	let cache = {}

	return (...args) => {
		let n = args[0]

		if (n in cache) return cache[n]

		cache[n] = fn(...args)
		return cache[n]
	}
}

module.exports = memoize
