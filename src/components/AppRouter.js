import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { userUrl, petUrl } from '../actions/api';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import UserPetForm from '../pages/UserPetForm';

const AppRouter = () => (
    <Switch>
        <Route exact path= "/" component={ LoginPage } />
        <Route exact path= "/register" component={ Register } />   
        <Route exact path= "/pets" component={ UserPetForm } />      
        <PrivateRoute exact path='/user' component={ HomePage } /> 
    </Switch>
);

export default AppRouter; 
