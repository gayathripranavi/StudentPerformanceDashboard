import React from "react";

export default function StudentTable({ data, sortKey, sortDirection, onSort, onRowClick }) {
  const headers = [
    { key: "name", label: "Name" },
    { key: "subject", label: "Subject" },
    { key: "score", label: "Score" },
    { key: "grade", label: "Grade" },
  ];
console.log(sortKey)
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
      <thead>
        <tr>
          {headers.map((h) => (
            <th
              key={h.key}
              onClick={() => onSort(h.key)}
              style={{
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
                padding: "0.5rem",
              }}
            >
              {h.label} {sortKey === h.key ? (sortDirection === "asc" ? "▲" : "▼") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((s) => (
          <tr
            key={s.id}
            style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}
            onClick={() => onRowClick(s)}
          >
            <td style={{ padding: "0.5rem" }}>{s.name}</td>
            <td style={{ padding: "0.5rem" }}>{s.subject}</td>
            <td style={{ padding: "0.5rem" }}>{s.score}</td>
            <td style={{ padding: "0.5rem" }}>{s.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
