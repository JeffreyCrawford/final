import React from 'react';
import Dashboard from "./Dashboard";
import ProfileForm from "./ProfileForm";
import ProjectForm from "./ProjectForm";

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'
import DisbursementLanding from './DisbursementLanding';
import ProjectLanding from "./ProjectLanding"


const MainBody = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact={true} component={Dashboard} />
                <Route path="/home" exact={true} component={Dashboard} />
                <Route path="/profile" exact={true} component={ProfileForm} />
                <Route path="/project" exact={true} component={ProjectLanding} />
                <Route path="/disbursement" exact={true} component={DisbursementLanding} />
            </div>
        </Router>
    );
}
  
export default MainBody;