import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About-Us-Body';
import Events from './components/Events';
import Projects from './components/ProjectMain'

function App() {
  return (
    <BrowserRouter basename="/ACM-PEC-Website">
    <div>
      <Header />
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
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
