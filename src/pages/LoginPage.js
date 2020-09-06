import React from 'react';
import { userService} from '../services/userService';
import { Button, TextField, withStyles, } from '@material-ui/core';
import './LoginPage.css';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

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

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password, returnUrl } = this.state;

        if (!(email && password)) {
            return;
        }

        this.setState({ loading: true });
        userService.login(email, password)
        .then(
            user => {
                const { from } = this.props.location.state || { from: { pathName: "/" } };
                this.props.history.push(from);
            },

            error => this.setState({ error, loading: false })
        );
    }

    render() {
        const { email, password, submitted, loading, error } = this.state;
        return(
            <div classeName={'container'}>
            <h1 className={'title'} >Welcome!</h1>
            <p className={'title'}>Already have an account with us? Login.</p>
            <p className={'register'}><em>Or register here.</em></p>
            <form autoComplete="off" noValidate className={'form'} name='form-group' onSubmit={this.handleSubmit}>
               
                <div className={'form-group' + (submitted && !email ? 'has error' : '')}>
                    <label htmlFor='email'>Email Address</label>
                     <TextField
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
                    <label htmlFor='password'>Password</label>
                    <TextField
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
                        className='submitButton'
                        disable={loading}>Login</Button>
                     </div>
                     {error &&
                     <div className='danger'>{error}</div>
                        }
            </form>
            </div>
        );
    }
}

export { LoginPage };