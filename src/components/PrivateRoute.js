import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({  component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
        ? <Component {...props} />
        : <Redirect to={{ pathname: 'userLogin/authenticate', state: { from: props.location } }} />
    )} />
)

export default PrivateRoute;