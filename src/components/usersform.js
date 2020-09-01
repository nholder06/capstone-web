import React, {useState} from 'react';
import { TextField, Grid, withStyles, FormControl, Select, MenuItem, Button } from '@material-ui/core';
import useForm from './useForm'
import { connect } from "react-redux";
import * as actions from "../actions/user";


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
    email: ''
}

const UsersForm = ({classes, ...props}) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName?"":"Required."
        if('email' in fieldValues)
            temp.email = fieldValues.email?"":"Required."
            temp.email = (/^$|.+@.+...+/).test(fieldValues.email)?"":"Not valid email."
        setErrors({
            ...temp
        })
    if(fieldValues == values)
        return Object.values(temp).every(x=> x=="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues, validate)

const handleSubmit = e => {
    e.preventDefault()
    //console.log(values)
    if(validate())
    {
        window.alert('validation suceeded.')
    }
}

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name="fullName"
                    variant="outlined"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                    {...(errors.fullName && { error: true, helperText: errors.fullName})}
                    />
                    <TextField
                    name="email"
                    variant="outlined"
                    label="Email Address"
                    value={values.email}
                    onChange={handleInputChange}
                    {...(errors.email && { error: true, helperText: errors.email})}
                    />
                    <TextField
                    name="password"
                    variant="outlined"
                    label="Password"
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <inputLabel>Pet Type</inputLabel>
                        <Select
                        name="petType"
                        //value={values.petType}
                       // onChange={handleInputChange}
                        >
                            <MenuItem>Select Pet Type</MenuItem>
                            <MenuItem>Dog</MenuItem>
                            <MenuItem>Cat</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.smMargin}>
                             Create Account
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    )
}

const mapStateToProps = state => ({
    userList: state.user.list
})

const mapActiontoProps = {
    createUser : actions.create,
    updateUser : actions.update
}

export default connect(mapStateToProps, mapActiontoProps)(withStyles(styles)(UsersForm));