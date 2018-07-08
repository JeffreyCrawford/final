import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import UserLogin from './Components/UserLogin';
import ProfileSidebar from './Components/ProfileSidebar';
import ProjectForm from './Components/ProjectForm';
import DisbursementRequestForm from './Components/DisbursementRequestForm';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'
import UserTemplate from './Components/UserTemplate';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/login" exact={true} component={UserLogin} />
					<Route path="/home" exact={true} component={UserTemplate} />
					<Route path="/profile" exact={true} component={UserTemplate} />
					<Route path="/project" exact={true} component={UserTemplate} />
					<Route path="/disbursement" exact={true} component={UserTemplate} />
				</div>
			</Router>
		);
	}
}

export default App;
