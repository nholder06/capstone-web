import React from 'react';
import { BrowserRouter as Router,
         Switch,
         Route,
         Link 
        } from 'react-router-dom';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import { Container} from '@material-ui/core';
import { PrivateRoute } from '../src/components/PrivateRoute';
import { HomePage } from '../src/pages/HomePage';
import { LoginPage } from '../src/pages/LoginPage';
import { Header } from '../src/components/Header';
import  Register  from '../src/components/Register';
import User from '../src/components/User';
import  './index.css';




class App extends React.Component {
  render() {
     return (
       <Provider store={store}>
        <div>
         <Container maxWidth="lg"></Container>
           <Header />
            <Router>
               <div>
               <Switch>
                 <PrivateRoute exact path='/' component = { HomePage } /> 
                  <Route path='/login' component= { LoginPage } />
                 </Switch>
                 <Register />
              </div>
            </Router>
      </div> 
    </Provider>
  );
}
}

export default App;
