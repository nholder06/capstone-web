import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import { Header } from '../src/components/Header';
import  './index.css';
import AuthDataProvider from './reducers/AuthDataContext';
import Router from '../src/components/Router';
import LoginPage from './pages/LoginPage';




class App extends React.Component {
  render() {
     return (
       <Provider store={store}>
       <BrowserRouter>
       <AuthDataProvider>
        <div>
           <Header />
              <Router />
              
      </div> 
      </AuthDataProvider>
      </BrowserRouter>
    </Provider>
  );
}
}

export default App;
