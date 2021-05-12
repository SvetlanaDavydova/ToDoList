
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" component={Home}/>
					<Redirect to="/" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
