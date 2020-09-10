import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from '../src/components/PrivateRoute';
import { userUrl } from '../src/actions/api';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import { Header } from '../src/components/Header';
import  './index.css';
import AuthDataProvider from './reducers/AuthDataContext';
import AppRouter from '../src/components/AppRouter';
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/HomePage';


class App extends React.Component {
  render() {
     return (
       <Provider store={store}>
       <div>
       <Header />
       <AppRouter />
         </div>
         </Provider>
  );
}
}

export default App;
