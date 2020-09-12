import React from 'react';
import { Link } from '@material-ui/core';
import '../styles/Elements.css';


const Navigation = () => {

return (
    <div className={'navBar'}>
    <Link className={"nav-link"} to="/user" >Home</Link>
    <Link className={"nav-link"} to="/pets" >Pet Profile</Link>
    <Link className={"nav-link"} to="/login">Logout</Link>
    </div>
);
}

export { Navigation };