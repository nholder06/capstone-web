import React from "react";
import UseForm from "../components/UseForm";
import { Navigation } from '../components/Navigation';
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../actions/user";
import "../styles/Forms.css";

const initialFieldValues = {
    fullName: '',
    email: '',
    password: ''
}

function Register({classes, ...props}) {

    const validate = (fieldValues = values) => {
        
        let temp = {}
        if('fullName' in fieldValues){
            temp.fullName = fieldValues.fullName?'':'Required.'
        }
        if('email' in fieldValues){
            temp.email = (/^$|.+@.+...+/).test(fieldValues.email)?'':'Not valid email. Required.'
        }
        if('password' in fieldValues){
            temp.password = fieldValues.password?'':'Required.'
        }
            setErrors({
                ...temp
            })
        
        if(fieldValues === values)
            return Object.values(temp).every(x => x === '')
        }

        const {
            values,
            errors,
            setErrors,  
            handleInputChange
        } = UseForm(initialFieldValues, validate)

        const handleSubmit = e => {
            e.preventDefault()
            if(validate()) {
                props.createUser(values, () => {window.alert("Success! You are now able to login.")})
                }
        }

         return (
             <div>
             <Navigation isLoggedIn={false} />
           <div className='container'>
            <div>
                <h1 className={'greeting'}>Create an account with us.</h1>
            </div>
            <form autoComplete="off" noValidate className={'form'} name='form-group' onSubmit={handleSubmit}>
                <div className={'form-group'}>
                    <TextField
                    name="fullName"
                    variant="outlined"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                    className={'help-block'}
                    {...(errors.fullName && { error: true, helperText: errors.fullName})}
                    />
                    </div>
                    <div className={"form-group"}>
                    <TextField
                    name="email"
                    variant="outlined"
                    label="Email Address"
                    type='email'
                    value={values.email}
                    onChange={handleInputChange}
                    className={'help-block'}
                    {...(errors.email && { error: true, helperText: errors.email})}
                    />
                    </div>
                    <div className={"form-group"}>
                    <TextField
                    name="password"
                    variant="outlined"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleInputChange}
                    className={'help-block'}
                    {...(errors.password && { error: true, helperText: errors.password})}
                    />
                    </div>
                    <div className={"form-group"}>
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={'submitButton'}
                        >
                             Create Account
                        </Button>
                </div>
        </form>
    </div>    
    </div>       
        );
    }

    const mapStateToProps = state => ({
        userList: state.user.list
    })

    const mapActiontoProps = {
        createUser : actions.create
    }

    export default connect(mapStateToProps, mapActiontoProps)(Register);