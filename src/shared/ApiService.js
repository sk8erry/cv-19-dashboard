export const getSummary = async () => {
	const data = await fetch('https://api.covid19api.com/summary')
	return await data.json()
}
