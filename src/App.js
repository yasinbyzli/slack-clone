import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login'
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import Loading from './components/Loading';
function App() {

  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          <Header />
          <StyledAppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </StyledAppBody>
        </>
        )}
      
    </Router>
    </div>
  );
}

export default App;

const StyledAppBody = styled.div`
  display: flex;
  height: 100vh;
`
