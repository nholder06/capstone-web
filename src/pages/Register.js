import React from "react";
import UseForm from "../components/UseForm";
import { TextField, Grid, withStyles, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../actions/user";
import "../styles/Forms.css";

const styles = theme => ({
    root: {
    '& .MuiTextField-root' : {
        margin: theme.spacing(1),
        minWidth: 230,
        }
    },
    formControl: {
    margin: theme.spacing(1),
        minWidth: 230,
        },
        smMargin:{
            margin: theme.spacing(1),
        }
})

const initialFieldValues = {
    fullName: '',
    email: '',
    password: ''
}

function Register({classes, ...props}) {

    const validate = (fieldValues = values) => {
        
        let temp = {}
        if("fullName" in fieldValues){
            temp.fullName = fieldValues.fullName?"":"Required."
        }
        if("email" in fieldValues){
            temp.email = (/^$|.+@.+...+/).test(fieldValues.email)?"":"Not valid email. Required."
        }
        if("password" in fieldValues){
            temp.password = fieldValues.password?"":"Required."
        }
            setErrors({
                ...temp
            })
        if(fieldValues === values)
            return Object.values(temp).every(x => x === "")
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
                props.createUser(values, () => {window.alert("Success!")})
            }
        }

         return (
           <div className='container'>
            <div>
                <h1 className={'title'}>Create an account with us.</h1>
            </div>
            <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name="fullName"
                    variant="outlined"
                    label="Full Name"
                    value={values.fullName}
                    className={'form-group'}
                    onChange={handleInputChange}
                    {...(errors.fullName && { error: true, helperText: errors.fullName})}
                    />
                    <TextField
                    name="email"
                    variant="outlined"
                    label="Email Address"
                    value={values.email}
                    className={'form-group'}
                    onChange={handleInputChange}
                    {...(errors.email && { error: true, helperText: errors.email})}
                    />
                    <TextField
                    name="password"
                    variant="outlined"
                    label="Password"
                    value={values.password}
                    className={'form-group'}
                    onChange={handleInputChange}
                    {...(errors.password && { error: true, helperText: errors.password})}
                    />
                    <div>
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={'submitButton'}
                        >
                             Create Account
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    </div>           
        );
    }

    const mapStateToProps = state => ({
        userList: state.user.list
    })

    const mapActiontoProps = {
        createUser : actions.create
    }

    export default connect(mapStateToProps, mapActiontoProps)(withStyles(styles)(Register));