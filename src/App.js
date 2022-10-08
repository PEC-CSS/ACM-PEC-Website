import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/common/Header/header';
import Footer from './components/common/Footer/Footer';
import About from './components/About-Us-Body';
import Events from './components/Events';
import Projects from './components/ProjectMain';
import Blogs from './components/Blogs';
import ScrollTopButton from './components/common/ScrollTopButton/ScrollTopButton';
import './app.css';

function App() {
  return (
    <BrowserRouter basename='/ACM-PEC-Website'>
      <div>
        <ScrollTopButton />
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
          <Route path='/Blogs'>
            <Blogs />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
