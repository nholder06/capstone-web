import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  HomePage from '../pages/HomePage';
import UserPetForm from '../pages/UserPetForm';

const Router = () => (
    <Switch>
        <Redirect from='/' to='/user/'/>
        <Route path='/' component={props => < HomePage {...props} /> } />
        <Route path='/pets' component= { UserPetForm } />
    </Switch>
);

export default Router;