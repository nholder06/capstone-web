import React from "react";
import { Grid, FormControl, Select, MenuItem, TextField, withStyles, Button } from "@material-ui/core";
import  UseForm  from "../components/UseForm";
import { connect } from "react-redux";
import * as actions from "../actions/pet";


const styles = theme => ({
    root: {
    '& .MuiTextField-root' : {
        margin: theme.spacing(3),
        minWidth: 250,
        }
    },
    formControl: {
    margin: theme.spacing(3),
        minWidth: 250,
        },
        smMargin:{
            margin: theme.spacing(1),
        }
})

const initialFieldValues = {
   name: '',
   type: '',
   age: '',
   birthday: '',
   breed: '',
   commands: '',
   likes: '',
   dislikes: '',
   routines: '',
   preferredVet: '',
   vetPhoneNum: '',
   notes: ''
}

function UserPetForm({classes, ...props}) {
    
    const validate = (fieldValues = values) => {

    let temp={}

    if('name' in fieldValues){
        temp.name = fieldValues.name?"":'Required.' 
        }
        if('type' in fieldValues){
            temp.type = fieldValues.type?"":'Required.'
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
        props.createPet(values, () => {window.alert("Success!")})
    }

    return (
        <div>
        <FormControl autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>

                <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name="name"
                    variant="outlined"
                    label="Name"
                    value={values.name}
                    onChange={handleInputChange}
                    {...(errors.name && { error: true, helperText: errors.name})}
                    />

                    <Select
                    name="petType"
                    value={values.type}
                    onChange={handleInputChange}
                    {...(errors.type && { error: true, helperText: errors.type})}>   
                    
                    <MenuItem>Select Pet Type</MenuItem>
                    <MenuItem>Dog</MenuItem>
                    <MenuItem>Cat</MenuItem>
                    </Select>
            
                    <TextField
                    name="age"
                    variant="outlined"
                    label="Age"
                    value={values.age}
                    onChange={handleInputChange}
                    />

                    <TextField
                    name="birthday"
                    variant="outlined"
                    label="Birthday"
                    value={values.birthday}
                    onChange={handleInputChange}
                    />

                    <TextField
                    name="breed"
                    variant="outlined"
                    label="Breed"
                    value={values.breed}
                    onChange={handleInputChange}
                    />

                    <TextField
                    name="commands"
                    variant="outlined"
                    label="Commands"
                    value={values.commands}
                    onChange={handleInputChange}
                    />

                    <TextField
                    name="likes"
                    variant="outlined"
                    label="Likes"
                    value={values.likes}
                    onChange={handleInputChange}
                    />

                    <TextField
                    name="dislikes"
                    variant="outlined"
                    label="Dislikes"
                    value={values.dislikes}
                    onChange={handleInputChange}
                    />

                    <TextField
                    name="routines"
                    variant="outlined"
                    label="Routines"
                    value={values.routines}
                    onChange={handleInputChange}
                    />

                    <TextField
                    name="prefVet"
                    variant="outlined"
                    label="Preferred Veternarian"
                    value={values.preferredVet}
                    onChange={handleInputChange}
                    />

                    <TextField
                    name="vetPhoneNum"
                    variant="outlined"
                    label="Preferred Veternarian's Phone Number"
                    value={values.vetPhoneNum}
                    onChange={handleInputChange}
                    />

                    <TextField
                    name="notes"
                    variant="outlined"
                    label="Notes"
                    value={values.notes}
                    onChange={handleInputChange}
                    multiLine
                    rows={5}
                    />

                    <div>
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.smMargin}>
                             Add Pet
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </FormControl>
        </div>
    );
}

const mapStateToProps = state => ({
    petList: state.pet.list
})

const mapActiontoProps = {
    createPet : actions.create
    // updatePet : actions.update
}

export default connect(mapStateToProps, mapActiontoProps)(withStyles(styles)(UserPetForm));