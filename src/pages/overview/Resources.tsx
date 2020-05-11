import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import './Resources.css'
import { Resource } from '../../shared/models/Resources'

const Resources = () => {
	const [resourceItems, setResourceItems] = useState<Resource[]>([])

	useEffect(() => {
		const items = [
			{
				link: 'https://www.youtube.com/watch?v=sHP0UIdZyI4',
				displayText: 'What is Coronavirus?'
			},
			{
				link: 'https://www.coronavirus.gov/',
				displayText: 'Coronavirus.gov'
			},
			{
				link: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019',
				displayText: 'World Health Organization'
			},
			{
				link:
					'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html#cdc-chat-bot-open',
				displayText: 'Coronavirus Self-Checker'
			}
		]
		setResourceItems(items)
	}, [])

	return (
		<Card fluid>
			<Card.Content style={{ height: '279px' }}>
				<h3>Resources</h3>
				{resourceItems.map((item) => (
					<div className="resources__item" key={item.link}>
						{item.displayText} <i className="fas fa-arrow-right"></i>
					</div>
				))}
			</Card.Content>
		</Card>
	)
}

export default Resources
