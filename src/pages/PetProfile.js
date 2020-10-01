import React, { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Table from '../components/Table';
import { Navigation } from '../components/Navigation';
import '../styles/Table.css';


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
                        Header: 'Routines',
                       
                        accessor: 'routines'
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
                    },
                    
                ]
            }
        ],
        []
    );

    return (
        <div>
        <div>
        <Navigation isLoggedIn={true} />
        </div>
        <br></br>
    <div className={'table'}>
        <Table
        columns={columns}
        data={data} 
        />
        {data.length===0 &&
            <div className={'noData'}>
        <span>There are no pets to show.</span>
        </div>}
    </div>
    </div>
    );
    }  

export default PetProfile;