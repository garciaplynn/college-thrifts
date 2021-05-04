import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';

import './resources/data/fa-library';
import Navbar from './components/Navbar';
import Routes from './containers/Routes';

const App = () => {
  const [user, setUser] = useState(null);

  const addUniversityData = (uniObject) => {
    firestore
      .collection('university')
      .doc()
      .set(uniObject)
      .then(() => {
        console.log('Document successfully written');
      })
      .catch((error) => {
        console.log('Error when writing document: ', error);
      });
  };

data.forEach(uni => console.log(uni));

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
