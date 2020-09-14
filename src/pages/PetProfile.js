import React from 'react';
import { Grid, Paper, TableContainer, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core';
import AuthDataProvider from "../components/AuthDataContext";


class PetProfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            pet: {},
            pets: []
        };
    }

    componentDidMount() {
        this.setState({
            pet: JSON.parse(localStorage.getItem('pets')),
            pets: { loading: true }
          });
        AuthDataProvider.getAllPets().then(pets => this.setState({ pets }));
    }

    render(){
        const{ pet, pets } = this.state;
        return (
            <div>
            <h2> Your Pet </h2>
            <div>
                <Paper elevation={3}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TableContainer>
                                <Table>     

                                    <TableHead>
                                    <TableRow>
                                        <TableCell> Name </TableCell>
                                        <TableCell> Type </TableCell>
                                        <TableCell> Breed </TableCell>
                                        <TableCell> Age </TableCell>
                                        <TableCell> Birthday </TableCell>
                                        <TableCell> Commands </TableCell>
                                        <TableCell> Likes </TableCell>
                                        <TableCell> Dislikes </TableCell>
                                        <TableCell> Preferred Vet </TableCell>
                                        <TableCell> Vet Phone Number</TableCell>
                                        </TableRow>
                                        </TableHead>

                                        <TableBody>
                                        {pets.length &&
                                        <TableRow>
                                        {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.name}</TableCell>
                                            )}
                                            {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.type}</TableCell>
                                            )}
                                            {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.breed}</TableCell>
                                            )}
                                            {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.age}</TableCell>
                                            )}
                                            {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.birthday}</TableCell>
                                            )}
                                            {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.commands}</TableCell>
                                            )}
                                            {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.likes}</TableCell>
                                            )}
                                            {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.dislikes}</TableCell>
                                            )}
                                            {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.preferredVet}</TableCell>
                                            )}
                                            {pets.map((pet, index) =>
                                            <TableCell key={pet.id}>{pet.vetNumber}</TableCell>
                                            )}
                                        </TableRow>
                                        }
                                        </TableBody>
                                        
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Paper>
                </div>
                <div>
                <Paper>
                    <Grid item xs={6}>
                        <h3>
                            Notes:
                        </h3>
                        {pets.length &&
                            <Grid>
                            {pets.map((pet, index) =>
                            <Grid key={pet.id}>{pet.notes}</Grid>
                        )}
                    </Grid>
                        }
                    </Grid>
                </Paper>
                </div>
            </div>
        );
    }
}

export default PetProfile;