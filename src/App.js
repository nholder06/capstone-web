import React from 'react';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import { Header } from '../src/components/Header';
import  './index.css';
import AppRouter from '../src/components/AppRouter';
import { Container } from '@material-ui/core';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  render() {
     return (
       <Provider store={store}>
       <Container maxWidth="lg">
       <BrowserRouter>
           <div>
         <Header />
         </div>
       <AppRouter />
       <Footer />
       </BrowserRouter>
       </Container>
         </Provider>
  );
}
}

export default App;
