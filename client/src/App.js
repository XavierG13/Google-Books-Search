import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import SearchBook from '../src/pages/SearchBook';
import SavedBook from './pages/SavedBook';

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path={['/', '/search']}>
						<SearchBook />
					</Route>
					<Route exact path={'/saved'}>
						<SavedBook />
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
