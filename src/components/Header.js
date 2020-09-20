import React from 'react';
import '../styles/Elements.css';
import { Navigation } from '../components/Navigation';

const Header = () => {

return (
    <div>
    <div>
    <h1 className={'header'} >Pet Friendly</h1>
    </div>
    <div>
    <Navigation />
   </div>
   </div>
)
};

export  { Header };