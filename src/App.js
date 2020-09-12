import React from 'react';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import { Header } from '../src/components/Header';
import  './index.css';
import AppRouter from '../src/components/AppRouter';


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
