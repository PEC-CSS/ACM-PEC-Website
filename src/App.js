import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/common/Header/header';
import Footer from './components/Footer';
import About from './components/About-Us-Body';
import Events from './components/Events';
import Projects from './components/ProjectMain';
import Fade from 'react-reveal/Fade';
import Blogs from './components/Blogs';

function App() {
  return (
    <BrowserRouter basename='/ACM-PEC-Website'>
    <div>
      <Fade right>
      <Header />
      </Fade>
      <Switch>
        <Route exact path='/'>
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
        <Route path='/Blogs'>
          <Blogs />
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
