import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Redirect } from 'react-router-dom';
import RouterConfig from './routes/RouterConfig';
import RouterView from './routes/RouterView';

function App() {
	return (
		<div className="App">
			<Router>
				<header className="header">
					<NavLink to="/list">列表页</NavLink>
					<NavLink to="/table">表格页</NavLink>
				</header>
				<main className="main">
					<RouterView routes={RouterConfig.routes}>
						<Redirect exact from="/" to="/list" />
					</RouterView>
				</main>
			</Router>
		</div>
	);
}

export default App;
