import React from 'react';
import { Link } from '@material-ui/core';
import "../styles/Elements.css";

const Header = () => {

return (
    <div className={'header'}>
    <h1 className={'h1'} >Pet Friendly</h1>
    <Link className={"nav-link"} to="/user" >Home</Link>
    <Link className={"nav-link"} to="/pets" >Pet Profile</Link>
    <Link className={"nav-link"} to="/login">Logout</Link>
    </div>
)
};

export  { Header };