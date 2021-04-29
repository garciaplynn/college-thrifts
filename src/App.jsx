import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';

import './resources/data/fa-library';
import Navbar from './components/Navbar';
import Routes from './containers/Routes';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('in use effect');
    firestore
      .collection('users')
      .doc('test-user')
      .get()
      .then((newUser) => {
        console.log('in firestore function');
        setUser(newUser.data());
        console.log(newUser.data());
      })
      .catch((err) => {
        console.log('in error');
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
