import data from '../../data/university-data.js';
import firebase, { firestore } from 'firebase';

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