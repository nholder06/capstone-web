import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthDataContext } from "../reducers/AuthDataContext";
import LoginPage from "../pages/LoginPage";
import UserPetForm from "../pages/UserPetForm";

const PrivateRoute = ({  component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
        ? <Component {...props} />
        : <Redirect to={{ pathname: 'userLogin/authenticate', state: { from: props.location } }} />
    )} />
)

export default PrivateRoute;