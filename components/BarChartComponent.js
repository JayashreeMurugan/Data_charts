import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './BarChartComponent'
const data = [
  { name: 'Fiction', sales: 2400 },
  { name: 'Non-Fiction', sales: 4567 },
  { name: 'Children', sales: 1398 },
  { name: 'Science', sales: 9800 },
  { name: 'History', sales: 3908 },
  { name: 'Biography', sales: 4800 },
];

const BarChartComponent = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
