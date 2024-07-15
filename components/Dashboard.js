import React from 'react';
import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chart-container">
        <h2>Monthly Sales</h2>
        <LineChartComponent />
      </div>
      <div className="chart-container">
        <h2>Sales by Category</h2>
        <BarChartComponent />
      </div>
      <div className="chart-container">
        <h2>Sales by Channel</h2>
        <PieChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
