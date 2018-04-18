import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import HomeScreen from './HomeScreen.js';
import AllUsersScreen from './AllUsersScreen.js';
import ProfileScreen from './ProfileScreen.js';
import NavBarComponent from './NavBarComponent.js';

let SupRouter = () => (
    <Router>
         <div>
            <NavBarComponent />

            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/users" component={AllUsersScreen} />
            <Route  path="/users/:id" component={ProfileScreen} />
        </div>
    </Router>
);


export default SupRouter;
