
let random = {
	rnd: Math.random,

	from(arr) {
		return arr[~~(this.rnd() * arr.length)]
	},

	range(min, max) {
		return min - .5 + this.rnd() * (max - min + 1)
	},

	seed(seed) {
		this.rnd = () => {
			let x = Math.sin(seed++) * 10000
			return x - Math.floor(x)
		}

		return this
	},
}

module.exports = random
