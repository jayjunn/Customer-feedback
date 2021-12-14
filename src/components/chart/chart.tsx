import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './chart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

type BarChartProps = {
  totalReview: number;
  reviewList: {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    comment?: string;
    rating?: number;
    timeStamp?: string;
    testTimeStamp?: string;
  }[];
};

const BarChart = (props: BarChartProps) => {
  const starCount = {
    '5star': 0,
    '4star': 0,
    '3star': 0,
    '2star': 0,
    '1star': 0,
  };

  props.reviewList.map((item) => {
    switch (item.rating) {
      case 5:
        starCount['5star'] += 1;
        break;
      case 4:
        starCount['4star'] += 1;
        break;
      case 3:
        starCount['3star'] += 1;
        break;
      case 2:
        starCount['2star'] += 1;
        break;
      case 1:
        starCount['1star'] += 1;
        break;
    }
    return 0;
  });

  const data = {
    labels: ['5 star', '4 star', '3 star', '2 star', '1 star'],
    datasets: [
      {
        label: '# of Votes',
        data: [
          starCount['5star'],
          starCount['4star'],
          starCount['3star'],
          starCount['2star'],
          starCount['1star'],
        ],
        backgroundColor: [
          'rgb(240,196,53)',
          'rgb(53,97,240)',
          'rgb(240,53,97)',
          'rgb(191,240,53)',
          'rgb(240,103,53)',
          'rgb(245,217,124))',
        ],
        borderColor: [
          'rgb(240,196,53)',
          'rgb(53,97,240)',
          'rgb(240,53,97)',
          'rgb(191,240,53)',
          'rgb(240,103,53)',
          'rgb(245,217,124))',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.chartContainer}>
      <div className={styles.totalNumber}>
        <h4 className={styles.copy}>Total review</h4>
        <h4 className={styles.number}>{props.totalReview}</h4>
      </div>

      <div className={styles.chart}>
        <Doughnut
          data={data}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
