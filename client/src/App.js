import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import SearchBook from './pages/Search';

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path={['/', '/search']}>
						<SearchBook />
					</Route>
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
