import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={EventList} />
          <Route path="/event/:id" component={EventDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
