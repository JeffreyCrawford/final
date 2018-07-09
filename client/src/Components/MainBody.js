import React from 'react';
import Dashboard from "./Dashboard";
import ProfileForm from "./ProfileForm";
import ProjectForm from "./ProjectForm";
import DisbursementRequestForm from "./DisbursementRequestForm";
import NewDisbursement from "./NewDisbursement"
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'


const MainBody = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact={true} component={Dashboard} />
                <Route path="/home" exact={true} component={Dashboard} />
                <Route path="/profile" exact={true} component={ProfileForm} />
                <Route path="/project" exact={true} component={ProjectForm} />
                <Route path="/disbursement" exact={true} component={NewDisbursement} />
            </div>
        </Router>
    );
}
  
export default MainBody;