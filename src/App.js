import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from './components'
import Planets from './container/Planets';
//import Planets from './planets';

const App = () => {
  return (<Switch>
    <Route exact path='/' component={Login} />
    <Route path='/planets' component={Planets} />
    <Route component={Login} />
  </Switch>
  );
}

export default App;
