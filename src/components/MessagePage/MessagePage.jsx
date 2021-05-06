import React from 'react';
import styles from './MessagePage.module.scss';

const MessagePage = () => {
  const messageJSX = (
    <section className={styles.MessagePage}>
      <h3 className={styles.heading}>Messages</h3>
      <div className={styles.messageBlock}>
        <div className={styles.person}>
          <img src="https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="woman" />
          <div className={styles.message}>
            <h3>Sam</h3>
            <p>Hey there! is the Crew Neck Sweater still available?</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="woman" />
          <div className={styles.message}>
            <h3>Peter</h3>
            <p>Hi! I am really interested in the miami hoodie! Still available?</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src="https://images.unsplash.com/photo-1528341866330-07e6d1752ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="woman" />
          <div className={styles.message}>
            <h3>Sarah</h3>
            <p>Yeah! It is still available! you want it?</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src="https://images.unsplash.com/photo-1542178243-bc20204b769f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="woman" />
          <div className={styles.message}>
            <h3>Ryan</h3>
            <p>Sick pants! $50 right?</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src="https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="woman" />
          <div className={styles.message}>
            <h3>Ben</h3>
            <p>Sup homie! Still selling the Miami flag??</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=784&q=80" alt="woman" />
          <div className={styles.message}>
            <h3>Vanessa</h3>
            <p>Is the size of the shirt a large? I want to wear it as a dress!</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="woman" />
          <div className={styles.message}>
            <h3>Claire</h3>
            <p>Hey there! Is the t-shirt still available?</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src="https://images.unsplash.com/photo-1483995564125-85915c11dcfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="woman" />
          <div className={styles.message}>
            <h3>Mike</h3>
            <p>Yo-yo!</p>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <>
      {messageJSX}
    </>
  );
};

export default MessagePage;
