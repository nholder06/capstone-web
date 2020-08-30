import React from 'react';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import User from './components/User'
import Usersform from './components/Usersform'

function App() {
  return (
    <Provider store = {store}>
      <User/>
      <Usersform/>
      </Provider>
  );
}

export default App;
