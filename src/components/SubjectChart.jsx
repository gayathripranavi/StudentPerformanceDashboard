import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from 'recharts';

export default function SubjectChart({ data }) {
  return (
    <div className="chart-wrapper">
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          {/* ✅ make labels rotate for responsiveness */}
          <XAxis 
            dataKey="subject" 
            angle={0} 
            textAnchor="end" 
            interval={0} 
            height={60} 
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="avgScore" fill="#ff6600" name="Avg Score" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
