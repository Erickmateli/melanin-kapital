import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['Loan Balance', 'Amount Repaid'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: [
          'rgb(228,228,228)',
          'rgb(255,171,0)',
         
        ],
      },
    ],
  };
const DiasporaSMEloan = () => {
  return (
    <div>
        <h4 style={{marginTop: "30px"}}>Diaspora SME Loan</h4>
        <Pie data={data} />
    </div>
  )
}

export default DiasporaSMEloan