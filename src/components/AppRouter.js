import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import UserPetForm from '../pages/UserPetForm';
// import PetProfile from '../pages/PetProfile';

const AppRouter = () => (
    <Switch>
        <Route exact path= "/" component={ LoginPage } />
        <Route exact path= "/register" component={ Register } />   
        <PrivateRoute exact path= "/addPet" component={ UserPetForm } />      
        <PrivateRoute exact path='/home' component={ HomePage } /> 
        {/* <PrivateRoute exact path='/userpet' component={ PetProfile } /> */}
    </Switch>
);

export default AppRouter; 
