import React from "react";
import AuthDataProvider from "../components/AuthDataContext";
import { Button, TextField } from "@material-ui/core";
import "../styles/Forms.css";
import { Link } from 'react-router-dom';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        AuthDataProvider.logout();

        this.state = {
            email: '',
            password: '',
            submitting: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;

        if (!(email && password)) {
            return ;
        }

        this.setState({ loading: true });
        AuthDataProvider.login(email, password)
            .then(
              user => {
                 const { from } = this.props.location.state || { from: { pathName: "/user" } };
                 this.props.history.push(from);
            },

            error => this.setState({ error, loading: false })
        );
    }

    render() {
        const { email, password, submitted, loading, error } = this.state;
        return(
            <div className={'container'}>
            <h1 className={'title'} >Welcome!</h1>
            <p className={'title'}>Login here if you already have an account with us.</p>
            <p className={'register'}><Link to="/register">Don't have an account? Register here. </Link></p>
            <form autoComplete="off" noValidate className={'form'} name='form-group' onSubmit={this.handleSubmit}>
               
                <div className={'form-group' + (submitted && !email ? 'has error' : '')}>
                    <TextField
                    label="Email Address"
                    type="email"
                    name="email"
                    value={email}
                    variant="outlined"
                    onChange={this.handleChange}
                    />
                    {submitted && !email &&
                    <div className='help-block'>Email Address is required.</div>
                    }
                </div>

                <div className={'form-group' + (submitted && !password ? 'hasError' : '')}>
                    <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    variant="outlined"
                    onChange={this.handleChange}
                    />
                    {submitted && !password &&
                    <div className='help-block'>Password is required.</div>
                    }
                     </div>

                     <div className='form-group'>
                     <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={'submitButton'}
                        disabled={loading}
                        >Login</Button>
                        {loading &&
                        <img alt="Loading" src = "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                        }
                     </div>
                     {error &&
                     <div className='danger'>{error}</div>
                        }
            </form>
            </div>
        );
    }
}


export default LoginPage;