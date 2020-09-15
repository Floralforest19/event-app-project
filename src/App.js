import React, { useState, useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EventListPage from './pages/EventListPage';



function App() {
 const [token, setToken] = useState(null)
  return (
    <div>
      <User.Provider value={{token, setToken}}>
      <Switch>
        <Route path="/event-list">
     <EventListPage />
        </Route>
        <Route path="/">
          <LoginPage/>
        </Route>
      </Switch>
      </User.Provider>
     </div>
    
  );
}

export default App;
