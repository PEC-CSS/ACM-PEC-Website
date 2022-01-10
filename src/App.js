import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <HashRouter>
    <div>
      <Switch>
        <Route exact path='/acm_pec_website'>
          <Home />
        </Route>
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
