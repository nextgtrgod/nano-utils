
let delay = (ms, ...args) => new Promise(resolve => {
	setTimeout(resolve, ms, args)
})

module.exports = { delay }
