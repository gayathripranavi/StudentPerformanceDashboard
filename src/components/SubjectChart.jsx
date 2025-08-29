import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SubjectChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="subject" 
          interval={0} 
          angle={0} 
          textAnchor="end" 
        />
        <YAxis />
        <Tooltip />
        <Bar dataKey="avgScore" fill="#ff6600" />
      </BarChart>
    </ResponsiveContainer>
  );
}
