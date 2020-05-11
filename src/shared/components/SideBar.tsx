import React, { useState, useEffect } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { useLocation, useHistory } from 'react-router-dom'
import './SideBar.css'

const SideBarNav = () => {
	const [navItems, setNavItems] = useState<any[]>([])
	const location = useLocation()
	const history = useHistory()

	useEffect(() => {
		setNavItems([
			{
				icon: 'fas fa-globe',
				text: 'Overview',
				key: 1,
				path: '/overview',
				active: location.pathname === '/overview' || location.pathname === '/'
			},
			{
				icon: 'fa fa-chart-bar',
				text: 'Country Stats',
				key: 2,
				path: '/country-stats',
				active: location.pathname === '/country-stats'
			}
			/* {
				icon: 'fas fa-flag',
				text: 'Most Affected',
				key: 3,
				path: '/most-affected',
				active: location.pathname === '/most-affected'
			} */
		])
	}, [location.pathname])

	const navigate = (path: string) => {
		history.push(path)
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
					<div
						className={
							navItem.active
								? 'side-bar__nav-item-active side-bar__nav-item'
								: 'side-bar__nav-item'
						}
						onClick={() => navigate(navItem.path)}
						key={navItem.key}
					>
						<i className={`${navItem.icon} side-bar__nav-icon`}></i>
						{navItem.text}
					</div>
				))}
			</div>
		</>
	)
}

export default SideBarNav
