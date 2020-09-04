import React from 'react';
import { userService} from '../services';
import { Button } from '@material-ui/core';

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

            error => this.setState({ error, loading: flase })
        );
    }

    render() {
        const { email, password, submitted, loading, error } = this.state;
        return(
            <div>
            <h2>Login</h2>
            <form name='form' onSubmit={this.handleSubmit}>
                <div classeName={'form-group' + (submitted && !email ? 'has error' : '')}>
                    <label htmlFor='email'>Email Address</label>
                    <input 
                    type='email' 
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    />
                    {submitted && !username &&
                    <div className='help-block'>Email Address is required.</div>
                    }
                </div>

                <div className={'form-group' + (submitted && !password ? 'hasError' : '')}>
                    <label htmlFor='password'>Password</label>
                    <input
                    type='password'
                    className='form-control'
                    name='password'
                    value={password}
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