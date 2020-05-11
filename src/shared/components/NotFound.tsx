import React from 'react'
import { Container } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
	const history = useHistory()

	const navigate = () => {
		history.push('/overview')
	}

	return (
		<Container>
			<h1>404</h1>
			<h1>Not Found</h1>
			<h3>
				The page you are looking for does not exist.
				<a onClick={() => navigate()} style={{ cursor: 'pointer' }}>
					Go to overview
				</a>
			</h3>
		</Container>
	)
}

export default NotFound
