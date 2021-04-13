import React from 'react';
// import styles from './App.module.scss';
import users from './resources/data/users';

import EditProfile from './components/EditProfile';

const App = () => (
  <div className="App">
    <EditProfile user={users[0]} />
    <EditProfile user={users[1]} />
  </div>
);

export default App;
