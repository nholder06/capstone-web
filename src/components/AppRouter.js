import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { userUrl, petUrl } from '../actions/api';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import UserPetForm from '../pages/UserPetForm';

const AppRouter = () => (
    <Switch>
        <Route exact path={ userUrl.create } component={ Register } />
        <Route exact path={ userUrl.authenticate } component={ LoginPage } />
           <PrivateRoute exact path={userUrl.fetchAll} component={ HomePage } />
           <PrivateRoute exact path={petUrl.create} component={ UserPetForm } />
    </Switch>
);

export default AppRouter;
