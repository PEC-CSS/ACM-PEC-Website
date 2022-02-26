import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About-Us-Body';
import Events from './components/Events';
import Projects from './components/ProjectMain';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <BrowserRouter basename="/home">
    <div>
      <Fade right>
      <Header />
      </Fade>
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/About-Us'>
          <About />
        </Route>
        <Route path='/Events'>
          <Events />
        </Route>
        <Route path='/Projects'>
          <Projects />
        </Route>
      </Switch>
      <Fade left>
      <Footer />
      </Fade>
    </div>
    </BrowserRouter>
  );
}

export default App;
