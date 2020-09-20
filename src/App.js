import React from 'react';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import { Header } from '../src/components/Header';
import  './index.css';
import AppRouter from '../src/components/AppRouter';
import { Container } from '@material-ui/core';


class App extends React.Component {
  render() {
     return (
       <Provider store={store}>
       <Container>
           <div>
         <Header />
         </div>
       <AppRouter />
       </Container>
         </Provider>
  );
}
}

export default App;
