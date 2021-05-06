import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bar, Line } from 'react-chartjs-2';
import GradientHeader from '../../components/GradientHeader';
import recycleimg from '../../resources/recycle world.png';
import styles from './CarbonFootprint.module.scss';
// import '../../scss/abstracts/_variables';
const CarbonFootprint = (props) => {
  const { user } = props;
  const uni = {
    color1: '#5DB075',
    color2: '#FFFFFF',
  };
  const dataBar = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'kg',
        data: [92, 84, 120, 82, 122, 80, 125],
        backgroundColor: [
          '#5DB075',
          '#4B9460',
          '#5DB075',
          '#4B9460',
          '#5DB075',
          '#4B9460',
          '#5DB075',
        ],
        borderColor: [
          '#5DB075',
          '#4B9460',
          '#5DB075',
          '#4B9460',
          '#5DB075',
          '#4B9460',
          '#5DB075',
        ],
        borderWidth: 1,
      },
    ],
  };
  const dataLine = {
    labels: ['March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: '$ saved',
        data: [25, 38, 50, 10, 25, 10],
        fill: true,
        backgroundColor: '#CCE0FB',
        borderColor: '#2F80ED',
      },
    ],
  };
  const optionsLine = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const optionsBar = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <div className={styles.carbonFootprint}>
        <h2>The Impact</h2>
        <GradientHeader uni={uni} />
        <div className={styles.logos}>
          <img src={recycleimg} alt="world" />
          <p>x</p>
          <img src={user.university.logo} alt="uni logo" />
        </div>
        <h3>{`Congratulations, ${user.university.mascot}`}</h3>
        <FontAwesomeIcon icon="grin-stars" className={styles.smile} />
        <p> Here’s how much carbon YOU have saved through second hand shopping: </p>
        <Bar data={dataBar} options={optionsBar} className={styles.bar} />
        <p> 125 kg is equivalent to: </p>
        <p> Money saved over the last six months by upcycling </p>
        <Line data={dataLine} options={optionsLine} className={styles.line} />
        <button type="button" className={styles.button}>
          <a href="https://www.smartgreenpost.com/2019/10/19/second-hand-clothes-are-good-for-the-environment-and-economy/">Learn More</a>
        </button>
      </div>
    </>
  );
};
export default CarbonFootprint;
