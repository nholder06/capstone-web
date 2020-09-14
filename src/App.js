import React from 'react';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import { Header } from '../src/components/Header';
import  './index.css';
import AppRouter from '../src/components/AppRouter';
import { Navigation } from './components/Navigation';


class App extends React.Component {
  render() {
     return (
       <Provider store={store}>
           <div>
         <Header />
         <Navigation />
         </div>
       <AppRouter />
         </Provider>
  );
}
}

export default App;
