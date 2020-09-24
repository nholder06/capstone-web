import React from 'react';
import { Paper, Grid, TextField, Button } from '@material-ui/core';
import   UseForm   from '../components/UseForm';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthDataProvider from '../components/AuthDataContext';
import '../styles/Forms.css';


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

function UserPetForm({classes, ...props}){

    let userId = localStorage.getItem('user');
    userId = JSON.parse(userId);
    userId = Object.values(userId);
    userId = userId[0];

    const history = useHistory();

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
            values.userId = userId;
          AuthDataProvider.addPet(values);
          history.push('/mypet');
        };
    }

return (
            <div>
                <Paper elevation={3} className={'paper'}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>

                        <h2 className={'h3'}>Create your pet's profile</h2>
                        <form autoComplete='off' noValidate className={'form'} onSubmit={handleSubmit}>
                        
                            <div className={'form-group'}>
                            <TextField
                            name='name'
                            variant='outlined'
                            label='Name'
                            value={values.name}
                            onChange={handleInputChange}
                            {...(errors.name && { error: true, helperText: errors.name})}
                            />
                            </div>
                            
                            <div className={'form-group'}>
                            <TextField
                            name='type'
                            variant='outlined'
                            label='Type'
                            value={ values.type }
                            onChange={handleInputChange}
                            {...(errors.name && { error: true, helperText: errors.name})}
                            />
                            </div>
                            
                            <div className={'form-group'}>
                             <TextField
                            name='breed'
                            variant='outlined'
                            label='Breed'
                            value={values.breed}
                            onChange={handleInputChange}
                            />
                            </div>

                            <div className={'form-group'}>
                             <TextField
                            name='age'
                            variant='outlined'
                            label='Age'
                            value={values.age}
                            onChange={handleInputChange}
                            />
                            </div>

                            <div className={'form-group'}>
                             <TextField
                            name='birthday'
                            variant='outlined'
                            label='Birthday'
                            value={values.birthday}
                            onChange={handleInputChange}
                            />
                            </div>

                            <div className={'form-group'}>
                             <TextField
                            name='commands'
                            variant='outlined'
                            label='Commands'
                            value={values.commands}
                            onChange={handleInputChange}
                            />
                            </div>
                            
                            <div className={'form-group'}>
                            <TextField
                            name='likes'
                            variant='outlined'
                            label='Likes'
                            value={values.likes}
                            onChange={handleInputChange}
                            />
                            </div>

                            <div className={'form-group'}>
                            <TextField
                            name='dislikes'
                            variant='outlined'
                            label='Dislikes'
                            value={values.dislikes}
                            onChange={handleInputChange}
                            />
                            </div>

                            <div className={'form-group'}>
                            <TextField
                            name='routines'
                            variant='outlined'
                            label='Routines'
                            value={values.routines}
                            onChange={handleInputChange}
                            />
                            </div>
                           
                            <div className={'form-group'}>
                            <TextField
                            name='preferredVet'
                            variant='outlined'
                            label='Preferred Vet'
                            value={values.preferredVet}
                            onChange={handleInputChange}
                            />
                            </div>

                            <div className={'form-group'}>
                            <TextField
                            name='vetPhoneNum'
                            variant='outlined'
                            label='Vet Phone Number'
                            value={values.vetPhoneNum}
                            onChange={handleInputChange}
                            />
                            </div>

                            <div className={'form-group'}>
                            <TextField
                            name='notes'
                            variant='outlined'
                            label='Notes'
                            value={values.notes}
                            multiline
                            rows={4}
                            onChange={handleInputChange}
                            />
                           </div>

                            <div className={'form-group'}>
                            <Button 
                            className={'submit'}
                            color={'primary'}
                            variant="contained"
                            type="submit">
                            Add Pet
                            </Button>
                            </div>
                            
                        </form>
                    </Grid>
                </Grid>
            </Paper>
        </div>

);
}

const mapStateToProps = state => ({
    petsList : state.pets.list
})


export default connect(mapStateToProps)(UserPetForm);