import React from 'react';
import '../styles/Elements.css';
import { Navigation } from '../components/Navigation';

const Header = () => {

return (
    <div>
    <div className={'header'}>
    <h1 className={'h1'}>Pet Friendly</h1>
    </div>
    <div>
    <Navigation />
   </div>
   </div>
)
};

export  { Header };