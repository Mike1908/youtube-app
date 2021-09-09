import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Error from './pages/Error';
import Player from './pages/Player';


const App = () =>{

  return (
   <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path='/Player/:titre' component={Player} />
          <Route component={Error} />
      </Switch>
   </BrowserRouter>
  );
}
export default App;
