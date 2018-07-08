import React from 'react';
import UserHome from "./UserHome";
import ProfileForm from "./ProfileForm";
import ProjectForm from "./ProjectForm";
import DisbursementRequestForm from "./DisbursementRequestForm";
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
                <Route path="/" exact={true} component={UserHome} />
                <Route path="/home" exact={true} component={UserHome} />
                <Route path="/profile" exact={true} component={ProfileForm} />
                <Route path="/project" exact={true} component={ProjectForm} />
                <Route path="/disbursement" exact={true} component={DisbursementRequestForm} />
            </div>
        </Router>
    );
}
  
export default MainBody;