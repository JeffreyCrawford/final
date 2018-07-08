import React, { Component } from 'react';
import './App.css';
import UserHome from './Components/UserHome';
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
			<UserTemplate />
		);
	}
}

export default App;
