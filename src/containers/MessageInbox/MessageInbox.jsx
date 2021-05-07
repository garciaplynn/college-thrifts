import React, { useEffect } from 'react';
import MessagePage from '../../components/MessagePage';

const MessageInbox = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage('messageInbox');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MessagePage />
    </>
  );
};

export default MessageInbox;
