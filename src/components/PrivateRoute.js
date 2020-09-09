import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthDataContext } from "../reducers/AuthDataContext";
import LoginPage from "../pages/LoginPage";
import UserPetForm from "../pages/UserPetForm";

// export const PrivateRoute = ({ component: Component, ...rest}) => (
//     <Route {...rest} render={props => (
//         localStorage.getItem('user')
//         ? <Component {...props} />
//         : <Redirect to={{  pathname: '/userLogin/Authenticate', state: { from: props.location}}} />
//     )} />
// )

const PrivateRoute = ({ component, ...options}) => {
    const { user } = useAuthDataContext();
    const finalComponent = user ? component : LoginPage;

    return <Route {...options} component={finalComponent} />;
};

const Router = () =>(
    <Switch>
    <Route path='userLogin/Authenticate' component={ LoginPage } />
        <Redirect from='/' to='/user/' />
        <PrivateRoute path='/user' component={ HomePage } />
        <PrivateRoute path='/pets' component={ UserPetForm } />        
    </Switch>
);