import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/categories" component={Categories}/>
					<Redirect to="/" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
