import React from 'react';
//  import styles from './App.module.scss';
import {
  faHeart, faTimes, faHistory, faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/Navbar';
import Button from './components/Button';

const App = () => (
  <>
    <Navbar />
    <Button icon={<FontAwesomeIcon icon={faHeart} />} />
    <Button icon={<FontAwesomeIcon icon={faTimes} />} />
    <Button icon={<FontAwesomeIcon icon={faHistory} />} />
    <Button icon={<FontAwesomeIcon icon={faStar} />} />
  </>
);

export default App;
