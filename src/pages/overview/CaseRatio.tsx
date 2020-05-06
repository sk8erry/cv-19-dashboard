import React, { useEffect, forwardRef, useRef, useState } from 'react'
import { Donut } from '@antv/g2plot'
import { Card } from 'semantic-ui-react'
import { Global } from '../../shared/models/summary'

const DonutChartContainer = forwardRef((props: any, ref: any) => (
	<div ref={ref}></div>
))

const CaseRatio = (props: any) => {
	const donutChartContainerRef = useRef()
	const [chartData, setChartData] = useState<any>([])
	const [donutPlot, setDonutPlot] = useState<Donut | null>(null)
	const [deathRate, setDeathRate] = useState<number>(0)
	const [recoverRate, setRecoverRate] = useState<number>(0)

	const formatChartData = (ratioData: Global) => {
		return [
			{
				type: 'Total Active Cases',
				value: ratioData.TotalConfirmed
			},
			{
				type: 'Total Deaths',
				value: ratioData.TotalDeaths
			},
			{
				type: 'Total Recovered',
				value: ratioData.TotalRecovered
			}
		]
	}

	/* initialize donut chart */
	useEffect(() => {
		if (Object.keys(props).length) {
			setChartData(formatChartData(props))
			setDeathRate(props.TotalDeaths / props.TotalConfirmed)
			setRecoverRate(props.TotalRecovered / props.TotalConfirmed)
			if (donutChartContainerRef.current && chartData.length) {
				const data = chartData
				const newPlot = new Donut(
					(donutChartContainerRef.current as unknown) as HTMLElement,
					{
						forceFit: true,
						radius: 0.8,
						data,
						angleField: 'value',
						colorField: 'type',
						legend: {
							visible: false,
							position: 'bottom-center'
						},
						statistic: {
							visible: true,
							totalLabel: 'Total',
							triggerOn: 'mouseenter',
							triggerOff: 'mouseleave'
						},
						label: {
							visible: true,
							type: 'outer',
							formatter: (d) => {
								if (d) {
									const text = chartData.find((x: any) => x.value === +d).type
									return `${text.split(' ')[1]}`
								}
								return ''
							}
						},
						color: (type: string) => {
							if (type === 'Total Confirmed') {
								return '#4455AB'
							} else if (type === 'Total Deaths') {
								return '#EC98BB'
							} else if (type === 'Total Recovered') {
								return '#0EBBBB'
							}
						}
					}
				)
				setDonutPlot(newPlot)
				newPlot?.render()
			}
		}
	}, [props])

	return (
		<Card fluid>
			<Card.Content>
				<h3>Case Ratio</h3>
				<DonutChartContainer ref={donutChartContainerRef}></DonutChartContainer>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-around',
						fontSize: '20px',
						lineHeight: '32px'
					}}
				>
					<div style={{ flex: 1, borderRight: '1px solid #DDD' }}>
						<div style={{ textAlign: 'center' }}>Death Rate</div>
						<div style={{ textAlign: 'center' }}>
							{deathRate?.toLocaleString()}%
						</div>
					</div>
					<div style={{ flex: 1 }}>
						<div style={{ textAlign: 'center' }}>Recovery Rate</div>
						<div style={{ textAlign: 'center' }}>
							{recoverRate?.toLocaleString()}%
						</div>
					</div>
				</div>
			</Card.Content>
		</Card>
	)
}

export default CaseRatio
