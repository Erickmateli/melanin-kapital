import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
  
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'KES 640,000',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgb(255,171,0)',
      },
    
    ],
  };
const Loanhistory = () => {
    return <Bar options={options} data={data} />;
}

export default Loanhistory