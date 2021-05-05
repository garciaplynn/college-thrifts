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
        setUser({ ...newUser.data(), id: newUser.id });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      { user && <Routes user={user} />}
      {console.log(user)}
      <Navbar />
    </>
  );
};

export default App;
