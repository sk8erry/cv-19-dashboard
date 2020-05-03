import React, { useEffect } from 'react'
import { getSummary } from './shared/ApiService'
import logo from './logo.svg'
import './App.css'

function App() {
	useEffect(() => {
		const fetchSummary = async () => {
			const data = await getSummary()
			console.log(data)
		}
		fetchSummary()
	}, [])
	return (
		<div className="App">
			<button class="ui button">Follow</button>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
