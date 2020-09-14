import React from "react";
import { Paper, Grid, TextField, withStyles, Button } from "@material-ui/core";
import   UseForm   from "../components/UseForm";
import { connect } from "react-redux";
import AuthDataProvider from "../components/AuthDataContext";
import "../styles/Elements.css";




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
   notes: '',
//    userId: localStorage.getItem('user')
}

function UserPetForm({classes, ...props}){

    const validate = (fieldValues = values) => {

        let temp={}
        if('name' in fieldValues){
            temp.name = fieldValues.name?'':'Required.'
        }
        if('type' in fieldValues){
            temp.type = fieldValues.type?'':'Required.'
        }
        setErrors({
            ...temp
        })

        if(fieldValues === values)
        return Object.values(temp).every(x => x === '')
    }

    const{
        values,
        errors, 
        setErrors, 
        handleInputChange
    } = UseForm(initialFieldValues, validate)


    const handleSubmit = e => {
        e.preventDefault()
        if(validate()){
          AuthDataProvider.addPet(values, () => {window.alert('Success!')})
        }
    }

return (
            <div>
                <h2 className={'h2'}>Create your pet's profile</h2>
                <form autoComplete='off' noValidate className={classes.root} onSubmit={handleSubmit}>
                <Paper elevation={3}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                            name='name'
                            variant='outlined'
                            label='Name'
                            value={values.name}
                            onChange={handleInputChange}
                            {...(errors.name && { error: true, helperText: errors.name})}
                            />
                            {/* <Select
                            name='type'
                            value={ values.type }
                            onChange={handleInputChange}> 
                            <MenuItem value={'dog'}>Dog</MenuItem>
                            <MenuItem value={'cat'}>Cat</MenuItem>
                            </Select>
                            <TextField
                            name='birthday'
                            type='date'
                            variant='outlined' 
                            label='Birthday'
                            value={values.birthday}
                            onChange={handleInputChange}
                            /> */}

                            <TextField
                            name='type'
                            variant='outlined'
                            label='Type'
                            value={ values.type }
                            onChange={handleInputChange}
                            {...(errors.name && { error: true, helperText: errors.name})}
                            />
                             <TextField
                            name='breed'
                            variant='outlined'
                            label='Breed'
                            value={ values.breed }
                            onChange={handleInputChange}
                            />
                             <TextField
                            name='age'
                            variant='outlined'
                            label='Age'
                            value={ values.age }
                            onChange={handleInputChange}
                            />
                             <TextField
                            name='birthday'
                            variant='outlined'
                            label='Birthday'
                            value={ values.birthday}
                            onChange={handleInputChange}
                            />
                             <TextField
                            name='commands'
                            variant='outlined'
                            label='Commands'
                            value={ values.commands }
                            onChange={handleInputChange}
                            />
                            <TextField
                            name='likes'
                            variant='outlined'
                            label='Likes'
                            value={values.likes}
                            onChange={handleInputChange}
                            />
                            <TextField
                            name='dislikes'
                            variant='outlined'
                            label='Dislikes'
                            value={values.dislikes}
                            onChange={handleInputChange}
                            />
                            <TextField
                            name='routines'
                            variant='outlined'
                            label='Routines'
                            value={values.routines}
                            onChange={handleInputChange}
                            />
                            <TextField
                            name='dislikes'
                            variant='outlined'
                            label='Dislikes'
                            value={values.dislikes}
                            onChange={handleInputChange}
                            />
                            <TextField
                            name='preferredVet'
                            variant='outlined'
                            label='Preferred Vet'
                            value={values.preferredVet}
                            onChange={handleInputChange}
                            />
                            <TextField
                            name='vetPhoneNum'
                            variant='outlined'
                            label='Vet Phone Number'
                            value={values.vetPhoneNum}
                            onChange={handleInputChange}
                            />

                            <div>
                            <Button 
                            className={'submit'}
                            color={'primary'}
                            variant="contained"
                            type="submit">
                            Add Pet
                            </Button>
                            </div>
                        </Grid>
                    </Grid>
                    </Paper>
                </form>
            </div>

);
}

const mapStateToProps = state => ({
    petsList : state.pets.list
})


export default connect(mapStateToProps)(withStyles(styles)(UserPetForm));