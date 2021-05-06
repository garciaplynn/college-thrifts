import React from 'react';
import styles from './MessagePage.module.scss';

const MessagePage = () => {
  const messageJSX = (
    <p>Messages</p>
  );
  return (
    <section className={styles.MessagePage}>
      {messageJSX}
      <div className={styles.messageBlock}>
        <div className={styles.Sam}>
          <img src="https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="woman" />
          <div className={styles.SamMessage}>
            <h3>Sam</h3>
            <p>Hey there! is the Crew Neck Sweater still available?</p>
          </div>
        </div>
        <div className={styles.Sam}>
          <img src="https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="woman" />
          <div className={styles.SamMessage}>
            <h3>Sam</h3>
            <p>Hey there! is the Crew Neck Sweater still available?</p>
          </div>
        </div>
        <div className={styles.Sam}>
          <img src="https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="woman" />
          <div className={styles.SamMessage}>
            <h3>Sam</h3>
            <p>Hey there! is the Crew Neck Sweater still available?</p>
          </div>
        </div>
        <div className={styles.Sam}>
          <img src="https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="woman" />
          <div className={styles.SamMessage}>
            <h3>Sam</h3>
            <p>Hey there! is the Crew Neck Sweater still available?</p>
          </div>
        </div>
        <div className={styles.Sam}>
          <img src="https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="woman" />
          <div className={styles.SamMessage}>
            <h3>Sam</h3>
            <p>Hey there! is the Crew Neck Sweater still available?</p>
          </div>
        </div>
        <div className={styles.Sam}>
          <img src="https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="woman" />
          <div className={styles.SamMessage}>
            <h3>Sam</h3>
            <p>Hey there! is the Crew Neck Sweater still available?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagePage;
