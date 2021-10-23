// Imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//App Imports
import Home from './components/Home.jsx'
import './App.css';

export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}