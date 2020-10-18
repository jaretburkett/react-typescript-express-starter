import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.scss';



class App extends React.Component {
	state = {
		isConnectedToApi: false
	};
	componentDidMount() {
		axios.get('/api')
			.then((response) => {
				console.log(response);
				if (response.data.status === 'OK') {
					this.setState({
						isConnectedToApi: true
					})
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		const { isConnectedToApi } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<p>
						App is {isConnectedToApi ? 'CONNECTED' : 'NOT CONNECTED'} to API.
					</p>
				</header>
			</div>
		);
	}
}

export default App;
