import React from 'react';
// import styles from './App.module.scss';

import EditProfile from './components/EditProfile';

const App = () => {
  const mockUser = {
    name: 'Tim',
    classOf: 2016,
    university: {
      name: 'Trinity College Dublin',
      abbreviation: 'TCD',
    },
    socials: [
      {
        url: 'instagram.com/tim.starrr',
        username: 'tim.starrr',
      },
    ],
  };
  return (
    <div className="App">
      <EditProfile user={mockUser} />
    </div>
  );
};

export default App;
