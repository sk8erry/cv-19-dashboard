import React from 'react'
import { Grid } from 'semantic-ui-react'
import SideBarNav from './shared/components/SideBar.tsx'
import NotFound from './shared/components/NotFound.tsx'
import Overview from './pages/overview/Overview.tsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import CountryStats from './pages/countryStats/CountryStats'

function App() {
	return (
		<>
			<Router>
				<Grid>
					<Grid.Row columns={2} style={{ paddingBottom: '0px' }}>
						<Grid.Column computer={2} only="computer">
							<SideBarNav></SideBarNav>
						</Grid.Column>
						<Grid.Column computer={14} mobile={16}>
							<Switch>
								<Route path="/country-stats" exact>
									<CountryStats></CountryStats>
								</Route>
								<Route path="/" exact>
									<Overview></Overview>
								</Route>
								<Route path="/overview" exact>
									<Overview></Overview>
								</Route>
								<Route>
									<NotFound></NotFound>
								</Route>
							</Switch>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Router>
		</>
	)
}

export default App
