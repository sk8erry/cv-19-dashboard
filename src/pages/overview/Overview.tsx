import React, { useEffect, useState } from 'react'
import { getSummary } from '../../shared/services/ApiService'
import { Summary, Global } from '../../shared/models/summary'
import { Grid } from 'semantic-ui-react'
import CaseNumbersCard from './CaseNumbersCard'
import CaseRatio from './CaseRatio'
import CountryOverview from './CountryOverview'
import Resources from './Resources'

const OverviewContext = React.createContext(null)

const Overview = () => {
	const [overviewData, setOverviewData] = useState<Summary | null>(null)
	const [cardData, setCardData] = useState<any>([])
	const [caseRatioData, setCaseRatioData] = useState<Global | null>(null)
	const [isBusy, setIsBusy] = useState<boolean>(false)

	useEffect(() => {
		setIsBusy(true)
		const fetchSummary = async () => {
			const data = await getSummary()
			setOverviewData(data)
			setCardData(formatCardData(data))
			setCaseRatioData(formatCaseRatioData(data))
			setIsBusy(false)
		}
		fetchSummary()
	}, [])

	const formatCaseRatioData = (data: Summary): Global => data.Global

	const formatCardData = (data: any) => [
		{
			key: 1,
			title: 'Worldwide Cases',
			value: data.Global.TotalConfirmed,
			diff: data.Global.NewConfirmed,
			positiveParam: false
		},
		{
			key: 2,
			title: 'Worldwide Deaths',
			value: data.Global.TotalDeaths,
			diff: data.Global.NewDeaths,
			positiveParam: false
		},
		{
			key: 3,
			title: 'Worldwide Recovered',
			value: data.Global.TotalRecovered,
			diff: data.Global.NewRecovered,
			positiveParam: true
		}
	]

	return (
		<div className="home_content">
			<Grid stackable>
				<Grid.Row>
					<Grid.Column>
						<h1>World Overview</h1>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={2}>
					<Grid.Column width={11}>
						<Grid stackable>
							<Grid.Row columns={3}>
								{cardData.map((data: any) => (
									<Grid.Column key={data.key}>
										<CaseNumbersCard {...data}></CaseNumbersCard>
									</Grid.Column>
								))}
							</Grid.Row>
							<Grid.Row columns={1}>
								<Grid.Column>
									<CountryOverview
										countryOverviewData={overviewData?.Countries}
									></CountryOverview>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
					<Grid.Column width={5}>
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<CaseRatio {...caseRatioData}></CaseRatio>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Resources></Resources>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	)
}

export default Overview
