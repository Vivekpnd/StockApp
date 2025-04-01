import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Chart({ symbol }) {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(''); 

  useEffect(() => {
    if (!symbol) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=5min&apikey=b9d38d3b9ea64463ba3507e93edc8364`
        );
        const result = await response.json();

        if (result.status === 'ok') {
          setData(result.values);
          setError('');
        } else {
          setError('Error fetching stock data. Invalid symbol or no data available.');
          setData([]); 
        }
      } catch (error) {
        setError('Error fetching stock data. Please try again later.');
        setData([]); 
      }
    };

    fetchData();
  }, [symbol]); 

  console.log(symbol)


  const chartData = {
    labels: data.map(item => item.datetime),
    datasets: [
      {
        label: `${symbol} Stock Price (Open)`,
        data: data.map(item => item.open),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(12, 189, 189, 0.2)',
        fill: true,
      },
      {
        label: `${symbol} Stock Price (Close)`,
        data: data.map(item => item.close),
        borderColor: 'rgb(207, 19, 44)',
        backgroundColor: 'rgba(12, 189, 189, 0.2)',
        fill: true,
      },
    ],
  };


  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${symbol} Stock Price (Open) - 5 Min Intervals`,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Timestamp',
        },
      },
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Price (USD)',
        },
      },
    },
  };

  return (
    <div>
     
      <div style={{ width: '800px', margin: '54px auto' }}>
        <h1 style={{ textAlign: 'center' }}>
          Stock Data for {symbol}
        </h1>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        {data.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p style={{ textAlign: 'center' }}>No data available for this symbol</p>
        )}
      </div>
    </div>
  );
}

export default Chart;
