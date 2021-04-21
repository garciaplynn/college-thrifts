import React from 'react';
import styles from './MessageInbox.module.scss';
import image from './message.svg';

const MessageInbox = () => (
  <>
    <p>MessageInbox works</p>
    <img className={styles.image} src={image} alt="" />
  </>
);

export default MessageInbox;
