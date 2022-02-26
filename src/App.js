import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About-Us-Body';
import Announcement from './components/Announcement';
import FadeExample from './components/FadeExample';

function App() {
  return (
    <BrowserRouter basename="/ACM-PEC-Website">
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about-us'>
          <About />
        </Route>
      </Switch>
      <Announcement />
      <FadeExample />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
