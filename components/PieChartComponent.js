import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, LabelList } from 'recharts';
import './PieChartComponent.css';

const data = [
  { name: 'Online', value: 400 },
  { name: 'Retail', value: 300 },
  { name: 'Wholesale', value: 300 },
  { name: 'Direct', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = () => (
  <div className="pie-chart-container">
    <div className="pie-chart-title">Sales Distribution</div>
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <LabelList dataKey="name" position="outside" />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default PieChartComponent;
