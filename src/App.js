import React from 'react';
import { BrowserRouter as Router,
         Switch,
         Route,
         Link 
        } from 'react-router-dom';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import  User  from './components/User';
import { Container} from "@material-ui/core";
import { PrivateRoute } from "../src/components/PrivateRoute";
import { HomePage } from "../src/pages/HomePage";
import { LoginPage } from "../src/pages/LoginPage";
import { Header } from "../src/components/Header"



function App() {
  return (
    <Provider store = {store}>
      <Container maxWidth="lg"></Container>
      <Header />
      <LoginPage />
      <User />
      {/* <div className="container">
        <Router>
          <div>
            <PrivateRoute exact path="/" component={HomePage}/>
            <Route path="/userLogin" component={LoginPage} />
          </div>
        </Router>
      </div> */}
      </Provider>
/*{ <Provider store = {store}>
<Container maxWidth="lg"></Container>
<div className="container">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to={ "/LoginPage" }>Register or Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> }*/
  //         <Route path="LoginPage/">
  //           <LoginPage />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  //   </div>
  //   </Provider> */}
  // );
//}
  );
}
// function Login() {
//   return <h2>Login</h2>;
// }

export default App;
