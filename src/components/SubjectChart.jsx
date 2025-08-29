import React from 'react';
import {
  ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar
} from 'recharts';

export default function SubjectChart({ data }) {
  console.log(data);
  return (
  <div className="chart-wrapper" style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="subject" angle={0} textAnchor="end" interval={0} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="avgScore" fill="#ff6600" name="Avg Score" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

}
