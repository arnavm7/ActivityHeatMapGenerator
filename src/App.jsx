// Imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//App Imports
import Home from './components/Home.jsx'
import ActivityPage from './components/ActivityPage.jsx'
import About from './components/About.jsx'
import Help from './components/Help.jsx'
import './App.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
    
      <Router>
      <div class="topnav">
    <Link to="/">Activity Tracker</Link>
    <Link to="/about">About</Link>
    <Link to="/help">Help</Link>
    </div>
        <Switch>
        <Route path = "/about">
            <About />
          </Route>
          <Route path="/activity">
            <ActivityPage />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
      </div>
  );
  
}