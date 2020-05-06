import React, { useState, useEffect } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import './SideBar.css'

const SideBarNav = () => {
	const [navItems, setNavItems] = useState<any[]>([])

	useEffect(() => {
		setNavItems([
			{
				icon: 'fas fa-globe',
				text: 'Overview',
				key: 1
			},
			{
				icon: 'fa fa-chart-bar',
				text: 'Country Stats',
				key: 2
			},
			{
				icon: 'fas fa-flag',
				text: 'Most Affected',
				key: 3
			}
		])
	}, [])

	const navItemActive = {
		backgroundColor: '#f5f8fe',
		fontWeight: 600
	}

	return (
		<>
			<div>
				<div className="side-bar__logo-container">
					<div>
						<i className="fas fa-virus side-bar__logo"></i>
					</div>
					<div>
						<div className="side-bar__upper-text">Covid-19</div>
						<div className="side-bar__lower-text">Corona Virus</div>
					</div>
				</div>
				{navItems.map((navItem) => (
					<div className="side-bar__nav-item" key={navItem.key}>
						<i className={`${navItem.icon} side-bar__nav-icon`}></i>
						{navItem.text}
					</div>
				))}
			</div>
		</>
	)
}

export default SideBarNav
