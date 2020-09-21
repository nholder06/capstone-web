import React, { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Table from '../components/Table';
import '../styles/Table.css';
import { ButtonGroup, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function PetProfile (){

    const [data, setData] = useState([]);

    useEffect(() => {
        let userId = localStorage.getItem('user');
        userId = JSON.parse(userId);
        userId = Object.values(userId);
        userId = userId[0];
        userId = parseInt(userId);
        (async () => {
            const result = await axios("http://localhost:63851/api/user/" + userId + "/pet");
            setData(result.data);
        })();
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'My Pets',
                columns: [
                    {
                    
                        Header: 'Name',
                        accessor: 'name'

                    },
                    {
                        Header: 'Type',
                        
                        accessor: 'type'

                    },
                    {
                        Header: 'Breed',
                       
                        accessor: 'breed'
                    },
                    {
                        Header: 'Age',
                        
                        accessor: 'age'
                    },
                    {
                        Header: 'Birthday',
                        
                        accessor: 'birthday'
                    },
                    {
                        Header: 'Commands',
                       
                        accessor: 'commands'
                    },
                    {
                        Header: 'Likes',
                        
                        accessor: 'likes'
                    },
                    {
                        Header: 'Dislikes',
                        
                        accessor: 'dislikes'
                    },
                    {
                        Header: 'Preferred Vet',
                        
                        accessor: 'preferredVet'
                    },
                    {
                        Header: 'Vet Phone Number',
                        
                        accessor: 'vetPhoneNum'
                    },
                    {
                        Header: 'Notes',
                        
                        accessor: 'notes'
                    }
                    
                ]
            }
        ],
        []
    );

    return (
        <div>
    <div className={'table'}>
    <ButtonGroup variant='text'>
        <Button><EditIcon color='primary' /></Button>
        <Button><DeleteIcon color='secondary' /></Button>
    </ButtonGroup>
        <Table
        columns={columns}
        data={data} />
    </div>
    </div>
    );
    }  

export default PetProfile;