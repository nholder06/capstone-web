import React, { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Table from '../components/Table';
import "../styles/Table.css";


function ProfileTable (){

    const [data, setData] = useState([]);


    useEffect(() => {
        (async () => {
            const result = await axios("http://localhost:63851/api/pets");
            setData(result.data);
        })();
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'All Pets',
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
    
    <div className={'table'}>
        <Table
        columns={columns}
        data={data} />
        
    </div>

    );
    }  

export default ProfileTable;