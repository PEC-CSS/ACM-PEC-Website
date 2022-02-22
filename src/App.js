import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Body from './components/About-us-Body';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename="/ACM-PEC-Website">
    <div>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Body />
          <Footer />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
