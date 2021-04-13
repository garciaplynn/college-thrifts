import React from 'react';
import GradientHeader from './components/GradientHeader';
import styles from './App.module.scss';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <div className={styles.headerContainer}>
      <GradientHeader />
    </div>
    <Navbar />
  </>
);

export default App;
