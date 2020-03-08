
let random = {
    rnd: Math.random,

    from: function(arr) {
        return arr[ ~~(this.rnd() * arr.length) ]
    },

    range: function(min, max) {
        return min - .5 + this.rnd() * (max - min + 1)
    },

    seed: function(seed) {
        this.rnd = () => {
            let x = Math.sin(seed++) * 10000
            return x - Math.floor(x)
        }

        return this
    },
}

console.log('i`m here')

module.exports = random
