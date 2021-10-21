
const pluralize = (
	count = 0,
	words = [],
) => {
	let cases = [2, 0, 1, 1, 1, 2]
	let index = (count % 100 > 4 && count % 100 < 20)
		? 2
		: cases[ Math.min(count % 10, 5) ]

    return words[index]
}

export default pluralize
