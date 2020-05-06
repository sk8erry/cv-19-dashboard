export class Summary {
	Countries: Country[] = []
	Date: string = ''
	Global: Global = new Global()
}

export class Global {
	NewConfirmed: number | null = null
	NewDeaths: number | null = null
	NewRecovered: number | null = null
	TotalConfirmed: number | null = null
	TotalDeaths: number | null = null
	TotalRecovered: number | null = null
}

class Country {
	Country: string = ''
	CountryCode: string = ''
	Date: string = ''
	NewConfirmed: number | null = null
	NewDeaths: number | null = null
	NewRecovered: number | null = null
	Slug: string = ''
	TotalConfirmed: number | null = null
	TotalDeaths: number | null = null
	TotalRecovered: number | null = null
}
