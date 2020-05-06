import { Summary } from '../models/summary'

export const getSummary = async (): Promise<Summary> => {
	const data = await fetch('https://api.covid19api.com/summary')
	return await data.json()
}

export const getCountryTotalAllStatus = async (countryName: string) => {
	const data = await fetch(
		`https://api.covid19api.com/total/country/${countryName}`
	)
	return await data.json()
}
