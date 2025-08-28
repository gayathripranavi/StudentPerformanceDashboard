import React from "react";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <div className="header">
      <h1>STUDENT PERFORMANCE DASHBOARD</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/*  Dark mode toggle button */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          style={{
            padding: "0.4rem 0.8rem",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: darkMode ? "#354f52" : "#cad2c5",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>

        <img
          src="https://via.placeholder.com/32"
          alt="User"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}
