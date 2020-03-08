
let clamp = (min, val, max = val) => Math.min(Math.max(min, val), max)

module.exports = clamp
