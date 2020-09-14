import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Elements.css";


function Navigation (){
    return (
<div className={'navBar'}>
    <p className={"nav"}><Link to="/user">Home</Link></p>
    <p className={"nav"}><Link to="/pets">Pet Profile</Link></p>
    <p className={"nav"}><Link to="/">Logout</Link></p>
    </div>
        );
    }   


export {Navigation};