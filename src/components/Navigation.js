import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Elements.css";


function Navigation (props){

    const isLoggedIn = props.isLoggedIn;

    return (
<div>
    <ul className={'navBar'}>
    <li className={"nav"}><Link to="/home">Home</Link></li>
    <li className={"nav"}><Link to="/addpet">Add Pet</Link></li>
    <li className={"nav"}><Link to="/mypet">My Pets</Link></li>
    {isLoggedIn &&
    <li className={"nav"}><Link to="/">Logout</Link></li>
    }
    {!isLoggedIn && 
        <li className={"nav"}><Link to="/">Login</Link></li>
        }
    </ul>
    </div>
        );
    }   

export {Navigation};