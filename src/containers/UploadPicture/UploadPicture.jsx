import React, { useEffect } from 'react';
import AddForm from '../../components/AddForm';

const UploadPicture = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage('uploadPicture');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AddForm />
    </>
  );
};

export default UploadPicture;
