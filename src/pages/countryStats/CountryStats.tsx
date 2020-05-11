import React, { useEffect, useState } from 'react'
import { Grid, Table, Card, Transition, List } from 'semantic-ui-react'
import { Summary } from '../../shared/models/summary'
import { getSummary } from '../../shared/services/ApiService'

const CountryStats = () => {
	const [overviewData, setOverviewData] = useState<Summary | null>(null)
	const [sortedCountry, setSortedCountry] = useState<any[]>([])
	const [displayedRowCount, setDisplayedRowCount] = useState<number>(15)

	useEffect(() => {
		const fetchSummary = async () => {
			const data = await getSummary()
			setOverviewData(data)
			setSortedCountry(formatTableData(data))
		}
		fetchSummary()
	}, [])

	const formatTableData = (data: any) => {
		console.log(data)
		const sortedCountryByCases = data.Countries?.map((a: any) => a)?.sort(
			(a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed
		)
		const sortedcountryByDeaths = data.Countries?.map((a: any) => a)?.sort(
			(a: any, b: any) => b.TotalDeaths - a.TotalDeaths
		)
		/* if (sortedCountryByCases) {
			setTopCases(sortedCountryByCases)
		}
		if (sortedcountryByDeaths) {
			setTopDeaths(sortedcountryByDeaths)
		} */
		return sortedCountryByCases
	}

	return (
		<div className="home_content">
			<Grid stackable>
				<Grid.Row>
					<Grid.Column>
						<h1>Country Stats</h1>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Card fluid>
							<Card.Content>
								<Table basic="very" size="large" singleLine>
									<Table.Header>
										<Table.Row>
											<Table.HeaderCell>Country</Table.HeaderCell>
											<Table.HeaderCell>Active Cases</Table.HeaderCell>
											<Table.HeaderCell>Deaths</Table.HeaderCell>
											<Table.HeaderCell>Recovered</Table.HeaderCell>
										</Table.Row>
									</Table.Header>
									<Table.Body>
										{sortedCountry
											?.slice(0, displayedRowCount)
											?.map((country, i) => (
												<Table.Row key={country.CountryCode}>
													<Table.Cell>
														<span className="country-overview__sort-number ">
															{i + 1}
														</span>
														{country.Country}
													</Table.Cell>
													<Table.Cell>{country.TotalConfirmed}</Table.Cell>
													<Table.Cell>{country.TotalDeaths}</Table.Cell>
													<Table.Cell>
														{country.TotalRecovered
															? country.TotalRecovered
															: 'N/A'}
													</Table.Cell>
												</Table.Row>
											))}
									</Table.Body>
								</Table>
								<h3
									style={{ color: '#4f78e0', cursor: 'pointer' }}
									onClick={() => setDisplayedRowCount(displayedRowCount + 10)}
								>
									Load more <i className="fas fa-arrow-right"></i>
								</h3>
							</Card.Content>
						</Card>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	)
}

export default CountryStats
