import React, {useState} from 'react';
import { TextField, Grid } from '@material-ui/core';
import useForm from "./useForm"


const initialUserValues={
    fullName : '',
    email: ''
}

const UsersForm = (props) => {

    const {
            values,
            setValues,
            handleInputChange
    } = useForm(initialUserValues)

    return (
        <form autoComplete="off" noValidate>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name="fullName"
                    variant="outlined"
                    label="Full Name"
                    value={initialUserValues.fullName}
                    onChange={handleInputChange}
                    />
                    <TextField
                    name="email"
                    variant="outlined"
                    label="Email Address"
                    value={initialUserValues.email}
                    onChange={handleInputChange}
                    />
                    <TextField
                    name="password"
                    variant="outlined"
                    label="Password"
                    />
                </Grid>
            </Grid>
        </form>
    )
}

export default UsersForm;