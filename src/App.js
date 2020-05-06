import React, { useEffect } from 'react'
import { getSummary } from './shared/services/ApiService.tsx'
import { Container, Grid } from 'semantic-ui-react'
import SideBarNav from './shared/components/SideBar.tsx'
import Overview from './pages/overview/Overview.tsx'
import './App.css'

function App() {
	return (
		<>
			<Grid>
				<Grid.Row columns={2} style={{ paddingBottom: '0px' }}>
					<Grid.Column computer={2} only="computer">
						<SideBarNav></SideBarNav>
					</Grid.Column>
					<Grid.Column computer={14} mobile={16}>
						<Overview></Overview>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	)
}

export default App
