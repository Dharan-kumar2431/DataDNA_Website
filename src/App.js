import {Route ,BrowserRouter as Router,Switch } from 'react-router-dom';
import Join from './JoinNow';
import Signin from './Signin';
import Home from'./home.js';

function App(){
  return(
      <div>

      <Router>
  <Switch>
    <Home/>
  <Route path='/JoinNow'> <Join/>  </Route> 
  <Route path='/Signin'> <Signin/> </Route>
  </Switch>
</Router>

</div>
  );
}

export default App;