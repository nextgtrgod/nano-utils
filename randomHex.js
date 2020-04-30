
let randomHex = () => '#' + (~~(Math.random() * 256**3 - 1)).toString(16).padEnd(6, '0')

module.exports = randomHex
