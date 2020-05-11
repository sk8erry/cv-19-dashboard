import { Summary } from '../models/summary'

export const getSummary = async (): Promise<Summary> => {
	try {
		const data = await fetch('https://api.covid19api.com/summary')
		return await data.json()
	} catch (err) {
		return err
	}
}

export const getCountryTotalAllStatus = async (countryName: string) => {
	try {
		const data = await fetch(
			`https://api.covid19api.com/total/country/${countryName}`
		)
		return await data.json()
	} catch (err) {
		return err
	}
}
