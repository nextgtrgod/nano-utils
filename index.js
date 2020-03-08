const { delay } = require('./src/delay')
const { events } = require('./src/events')

events.on('!', (...args) => console.log('!', ...args))

delay(1000, 1, 2, 3, 4, 5).then((...args) => {
	console.log(...args)
	events.emit('!', 5, 6, 7, 8)
})
