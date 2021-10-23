// Imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//App Imports
import Home from './components/Home.jsx'
import ActivityPage from './components/ActivityPage.jsx'
import './App.css';

export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/activity">
            <ActivityPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}