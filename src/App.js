import {Route ,BrowserRouter as Router,Switch } from 'react-router-dom';
import Join from './JoinNow';
import Signin from './Signin';
import Home from'./home.js';

import Curriculum from './Curriculum';
import Testimonial from './Testimonial';
import Members from './Members';
import Courses from './Courses';
import Certification from './certification';
import Internship from './internship';
import Mentership from './mentership';
import Programdetails from './programdetails';
/*import Eventmain from './eventmain';*/
import EventTest from './EventTest';
import Forum from './forum';
import Blog from './blog';


function App(){
  return(
      <div>
        

      <Router>
  <Switch>
  <Route exact path='/'>
    <Home/>
  </Route>
    
  <Route path='/JoinNow'> <Join/>  </Route> 
  <Route path='/Signin'> <Signin/> </Route>
  <Route  path='/Curriculum'> <Curriculum/> </Route>
  <Route path='/Testimonial'> <Testimonial/> </Route>
  <Route path='/Members'> <Members/> </Route>
  <Route path='/courses'> <Courses/> </Route>
  <Route path="/certification">
      <Certification/>
    </Route>
    <Route path="/internship">
      <Internship/>
    </Route>
    <Route path="/mentership">
      <Mentership/>
    </Route>
    <Route path="/programdetails">
      <Programdetails/>
    </Route>
    {/* <Route path="/eventmain">
      <Eventmain/>
    </Route> */}
    <Router path="/eventmain">
      <EventTest />
    </Router>
    <Router path="/forum">
      <Forum />
    </Router>
    <Router path="/blog">
      <Blog />
    </Router>

  

  </Switch>
</Router>

</div>
  );
}

export default App;