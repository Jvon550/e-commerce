import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';
import './App.css';

import Login from './components/Login';
import AccountRegister from './components/AccountRegister';
import Home from './components/Home';
import NoPage from './components/NoPage';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
                <Home />
            }
          />
                    {/* <Route
            path='/'
            element={
              <RequireAuth loginPath='login'>
                <Home />
              </RequireAuth>
            }
          /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<AccountRegister />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
