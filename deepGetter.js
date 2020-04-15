
let deepGetter = (obj, path, replace) => {
	let keys = path.split('.')
	let current = obj

	for (let i = 0; i < keys.length; i++) {
		current = current[ keys[i] ]

		if (current === undefined) return ''
	}

	if (replace)
		return replace.get(current) !== undefined
			 ? replace.get(current)
			 : current

	return current
}

module.exports = deepGetter
