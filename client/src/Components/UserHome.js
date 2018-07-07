import React, { Component } from "react";
import UserSidebar from "./UserSidebar";
import ProjectForm from "./ProjectForm";

class UserHome extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <UserSidebar />
                </div>
            </div>
        )
    }
}

export default UserHome;