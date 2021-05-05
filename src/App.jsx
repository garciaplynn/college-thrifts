import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';

import './resources/data/fa-library';
import Navbar from './components/Navbar';
import Routes from './containers/Routes';
import Error from './components/Error';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    firestore
      .collection('users')
      .doc('test-user')
      .get()
      .then((newUser) => {
        setUser({ ...newUser.data(), id: newUser.id });
      })
      .catch((err) => {
        setError(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {error && <Error message="There was an error" setError={setError} />}
      {user && <Routes user={user} />}
      <Navbar />
    </>
  );
};

export default App;
