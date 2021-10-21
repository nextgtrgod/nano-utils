
const dummyFetch = (
	time = 1000,
	random = false,
	success,
	error,
) => (
	new Promise(async (resolve, reject) => {
		// await delay(time ?? 1000)

		if (random) Math.random() > .5
			? resolve({ data: success })
			: reject({ data: error })

		else resolve({ data: success })
	})
)

module.exports = dummyFetch
