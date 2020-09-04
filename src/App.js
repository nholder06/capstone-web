import React from 'react';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import  User  from './components/User'
import { Container} from "@material-ui/core"

function App() {
  return (
    <Provider store = {store}>
      <Container maxWidth="lg"></Container>
      <User/>
      </Provider>
  );
}

export default App;
