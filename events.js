
let events = {
	list: {},
	on(event, cb) {
		(this.list[event] = this.list[event] || []).push(cb)
	},
	emit(event, ...args) {
		(this.list[event] || []).forEach(cb => cb(...args))
	},
	off(event, offCb) {
		if (this.list[event])
			this.list[event] = this.list[event].filter(cb => cb !== offCb)
	},
}

module.exports = events
