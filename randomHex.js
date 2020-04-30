
let randomHex = () => '#' + (~~(Math.random() * 256**3 - 1)).toString(16)

module.exports = randomHex
