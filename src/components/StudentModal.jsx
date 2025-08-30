
import React from "react";

export default function StudentModal({ student, onClose }) {
  if (!student) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          width: "300px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ marginBottom: "1rem" }}>Student Details</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Subject:</strong> {student.subject}</p>
        <p><strong>Score:</strong> {student.score}</p>
        <p><strong>Grade:</strong> {student.grade}</p>
        <button
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            background: "#52796f",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
