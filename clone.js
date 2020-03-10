
let clone = (obj = {}) => JSON.parse(JSON.stringify(obj))

module.exports = clone
