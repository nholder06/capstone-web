import React from 'react';
import { BrowserRouter as Router,
         Switch,
         Route,
         Link 
        } from 'react-router-dom';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import  User  from './components/User';
import { Container} from "@material-ui/core";
import { PrivateRoute } from "../src/components/PrivateRoute";
import { HomePage } from "../src/pages/HomePage";
import { LoginPage } from "../src/pages/LoginPage";
import { Header } from "../src/components/Header";
import  UserPetForm  from '../src/pages/UserPetForm';
import  "./index.css";




class App extends React.Component {
  render() {
     return (
       <Provider store={store}>
        <div>
         <Container maxWidth="lg"></Container>
           <Header />
            <Router>
               <div>
                 <PrivateRoute exact path='/' component = { HomePage } />
                 <Route path='/login' component= { LoginPage } />
              </div>
            </Router>
      </div>
    </Provider>
  );
}
}

export default App;
