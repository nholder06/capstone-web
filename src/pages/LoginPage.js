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
              () => {
                 this.props.history.push('/home');
            },

            error => this.setState({ error })
        );
    }

    render() {
        const { email, password, submitted, error } = this.state;
        return(
            <div className={'container'}>
            <h1 className={'greeting'} >Welcome!</h1>
            <p className={'h3'}>Login here if you already have an account with us.</p>
            <p className={'h3'}><Link to="/register">Don't have an account? Register here. </Link></p>
            <form autoComplete="off" noValidate className={'form'} name='form-group' onSubmit={this.handleSubmit}>
               
                <div className={'form-group'}>
                    <TextField
                    label="Email Address"
                    type="email"
                    name="email"
                    value={email}
                    variant="outlined"
                    onChange={this.handleChange}
                    />
                    {submitted && !email &&
                    <div className={'help-block'}>Email Address is required.</div>
                    }
                </div>

                <div className={ 'form-group'}>

                    <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    variant="outlined"
                    onChange={this.handleChange}
                    />
                    {submitted && !password &&
                    <div className={'help-block'}>Password is required.</div>
                    }
                     </div>

                     <div className='form-group'>
                     <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={'submitButton'}>Login</Button>
                     </div>
                     {error &&
                     <div className={'help-block'}>{error}</div>
                        }
            </form>
            </div>
        );
    }
}


export default LoginPage;