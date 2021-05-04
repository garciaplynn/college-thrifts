import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';

import './resources/data/fa-library';
import Navbar from './components/Navbar';
import Routes from './containers/Routes';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firestore
      .collection('users')
      .doc('test-user')
      .get()
      .then((newUser) => {
        setUser(newUser.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Routes user={user} />
      <Navbar />
    </>
  );
};

export default App;
