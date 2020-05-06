import React from 'react'
import { Card, Statistic } from 'semantic-ui-react'

const CaseNumbersCard = (props: any) => {
	const diffNumberColor =
		(props.positiveParam && props.diff >= 0) ||
		(!props.positiveParam && props.diff <= 0)
			? 'green'
			: 'red'

	const getCardColor = (title: string) => {
		switch (title) {
			case 'Worldwide Cases':
				return '#4455AB'
			case 'Worldwide Deaths':
				return '#EC98BB'
			case 'Worldwide Recovered':
				return '#0EBBBB'
		}
	}

	const getIcon = (title: string) => {
		switch (title) {
			case 'Worldwide Cases':
				return 'fas fa-biohazard'
			case 'Worldwide Deaths':
				return 'fas fa-cross'
			case 'Worldwide Recovered':
				return 'far fa-heart'
		}
	}

	const diffNumberStyle = {
		fontSize: '16px',
		marginLeft: '6px',
		lineHeight: '34px',
		color: diffNumberColor
	}

	const valueStyle = {
		display: 'flex',
		fontSize: '50px'
	}

	const descStyle = {
		fontSize: '20px'
	}

	const iconStyle = {
		fontSize: '20px',
		marginLeft: '10px',
		color: getCardColor(props.title)
	}

	const cardStyle = {
		border: `1px solid ${getCardColor(props.title)}`,
		boxShadow: 'none'
	}

	return (
		<Card style={cardStyle} fluid>
			<Card.Content>
				<Card.Header>
					<Statistic>
						<Statistic.Value>
							<div style={valueStyle}>
								{props.value.toLocaleString()}
								<div style={diffNumberStyle}>
									{props.diff < 0 ? '-' : '+'}
									{props.diff.toLocaleString()}
								</div>
							</div>
						</Statistic.Value>
					</Statistic>
				</Card.Header>
				<Card.Description style={descStyle}>
					{props.title}
					<i className={getIcon(props.title)} style={iconStyle}></i>
				</Card.Description>
			</Card.Content>
		</Card>
	)
}

export default CaseNumbersCard
