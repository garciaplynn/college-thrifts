import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import fakeClothingData from '../../resources/data/fake-data';
import GradientHeader from '../../components/GradientHeader';
import ClothingCard from '../../components/ClothingCard';
import FilterButton from '../../components/FilterButton';
import Button from '../../components/Button';
import uniData from '../../resources/data/university-data';
import { firestore } from '../../firebase';

import styles from './ClothingRail.module.scss';

const ClothingRail = (props) => {
  const { user } = props;
  const [index, updateIndex] = useState(0);
  const [wasSwiped, setWasSwiped] = useState(false);
  const handleLike = () => {
    firestore
      .collection('users')
      .doc(user.id)
      .collection('likes')
      // insert clothing ID in parenthesis below
      .doc()
      .set(fakeClothingData[index])
      .then(() => {
        console.log('Document successfully written');
      })
      .catch((error) => {
        console.log('Error when writing document: ', error);
      });
  };

  const styleSetter = () => {
    let swipedStyle = {};
    if (wasSwiped === 'left') {
      swipedStyle = {
        transition: '0.5s',
        opacity: 0.5,
        zIndex: 10,
        transform: 'translateX(-250px)',
        WebkitTransform: 'translateX(-250px)',
        MozTransform: 'translateX(-250px)',
      };
    } else if (wasSwiped === 'right') {
      swipedStyle = {
        transition: '0.5s',
        opacity: 0.5,
        zIndex: 10,
        transform: 'translateX(250px)',
        WebkitTransform: 'translateX(250px)',
        MozTransform: 'translateX(250px)',
      };
    } else if (wasSwiped === 'up') {
      swipedStyle = {
        transition: '0.5s',
        opacity: 0.5,
        zIndex: 10,
        transform: 'translateY(-250px)',
        WebkitTransform: 'translateY(-250px)',
        MozTransform: 'translateY(-250px)',
      };
    } else {
      swipedStyle = {
        opacity: 1,
        animation: 'fadeInOpacity',
        transition: '0.5s',
      };
    }
    return swipedStyle;
  };

  useEffect(() => {
    setWasSwiped(false);
  }, [index]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setWasSwiped('left');
      if (index === uniData.length - 1) {
        setTimeout(() => {
          updateIndex(0);
        }, 500);
      } else {
        setTimeout(() => {
          updateIndex(index + 1);
        }, 500);
      }
    },
    onSwipedRight: () => {
      setWasSwiped('right');
      if (index === 0) {
        setTimeout(() => {
          updateIndex(uniData.length - 1);
        }, 500);
      } else {
        setTimeout(() => {
          updateIndex(index - 1);
        }, 500);
      }
    },
    onSwipedUp: () => {
      setWasSwiped('up');
      handleLike();
      setTimeout(() => setWasSwiped(false), 500);
    },
  });

  const cardsJSX = (
    <section>
      <GradientHeader uni={uniData[index]} />
      <div className={styles.header}>
        <FilterButton />
        <h2 className={styles.title}>{uniData[index].title}</h2>
      </div>
      <div style={styleSetter()} ref={handlers.ref}>
        <ClothingCard clothingItem={fakeClothingData[index]} />
      </div>
      <Button handleLike={handleLike} />
    </section>
  );

  return <section>{cardsJSX}</section>;
};

export default ClothingRail;
