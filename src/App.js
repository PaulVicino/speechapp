import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Signin';
import Dictaphone from "./Dictaphone";

import 'bulma/css/bulma.min.css';
import './App.css';

import { auth } from "./firebase-config";

function App() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  auth.onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false);
  })

  if (isUserSignedIn === true) {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Dictaphone />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
