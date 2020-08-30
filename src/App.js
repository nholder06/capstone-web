import React from 'react';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import usersform from './components/usersform';

function App() {
  return (
    <Provider store = {store}>
      <user/>
      <usersform/>
      </Provider>
    
  );
}

export default App;
