import React from 'react';
import Login from './pages/Login'
import SignUp from './pages/Signup';
import Home from './pages/Home';
import NewBook from './pages/NewBook'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import MainLayout from './layouts/main'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <MainLayout>
            <Route path="/new" component={NewBook} />
            <Route exact path="/home" component={Home} />
          </MainLayout>
        </Switch>
      </div>
    </Router>
  );
}

export default App;