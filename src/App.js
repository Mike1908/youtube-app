import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Player from './pages/Player';


const App = () =>{

  return (
   <BrowserRouter>
      <Switch>
          <Route exact path="/youtube-app/" component={Home} />
          <Route path='/youtube-app/Player/:titre' component={Player} />
          <Route component={Error} />
      </Switch>
   </BrowserRouter>
  );
}
export default App;
