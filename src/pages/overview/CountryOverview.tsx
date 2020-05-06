import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import { Card, Grid, Table, Label } from 'semantic-ui-react'
import './CountryOverview.css'

const CountryOverview = (props: any) => {
	const [geoChartData, setGeoChartData] = useState<any>([
		['Country', 'Confirmed Cases']
	])
	const [topCases, setTopCases] = useState<any>([])
	const [topDeaths, setTopDeaths] = useState<any>([])

	useEffect(() => {
		formatGeoChartData(props.countryOverviewData)
		formatTableData(props)
	}, [props])

	const formatGeoChartData = (data: any[]) => {
		const newData = data?.map((country) => [
			{ v: country.CountryCode, f: country.Country },
			country.TotalConfirmed,
			`${country.TotalConfirmed?.toLocaleString()} Active Cases`
		])
		if (newData) {
			setGeoChartData([
				['Country', 'Confirmed Cases', { type: 'string', role: 'tooltip' }],
				...newData
			])
		}
	}

	const formatTableData = (data: any) => {
		const sortedCountryByCases = data.countryOverviewData
			?.map((a: any) => a)
			?.sort((a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed)
		const sortedcountryByDeaths = data.countryOverviewData
			?.map((a: any) => a)
			?.sort((a: any, b: any) => b.TotalDeaths - a.TotalDeaths)
		if (sortedCountryByCases) {
			setTopCases(sortedCountryByCases)
		}
		if (sortedcountryByDeaths) {
			setTopDeaths(sortedcountryByDeaths)
		}
	}

	return (
		<Card fluid>
			<Card.Content>
				<Grid>
					<Grid.Row columns={2}>
						<Grid.Column
							width={6}
							style={{ flex: 1, borderRight: '1px solid #DDD' }}
						>
							<h3>Top Cases</h3>
							<Table basic="very" size="large" singleLine>
								<Table.Body>
									{topCases?.slice(0, 5).map((data: any, i: number) => (
										<Table.Row key={data.CountryCode}>
											<Table.Cell>
												<span className="country-overview__sort-number ">
													{i + 1}
												</span>
												{data.Country}
											</Table.Cell>
											<Table.Cell>
												{data.TotalConfirmed.toLocaleString()}
											</Table.Cell>
										</Table.Row>
									))}
								</Table.Body>
							</Table>
							<h3>Top Deaths</h3>
							<Table basic="very" size="large" singleLine>
								<Table.Body>
									{topDeaths?.slice(0, 5).map((data: any, i: number) => (
										<Table.Row key={data.CountryCode}>
											<Table.Cell>
												<span className="country-overview__sort-number ">
													{i + 1}
												</span>
												{data.Country}
											</Table.Cell>
											<Table.Cell>
												{data.TotalDeaths.toLocaleString()}
											</Table.Cell>
										</Table.Row>
									))}
								</Table.Body>
							</Table>
							<h4 style={{ color: '#4f78e0' }}>
								View country stats <i className="fas fa-arrow-right"></i>
							</h4>
						</Grid.Column>
						<Grid.Column width={10}>
							<Chart
								width={'600px'}
								height={'670px'}
								chartType="GeoChart"
								data={geoChartData}
								options={{
									colorAxis: {
										colors: ['#f5f8fe', '#4455AB']
									}
								}}
								rootProps={{ 'data-testid': '1' }}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Card.Content>
		</Card>
	)
}

export default CountryOverview
