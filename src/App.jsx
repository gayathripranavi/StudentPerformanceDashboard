import React, { useState, useMemo } from "react";
import "./index.css";

//custom componenets

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Filters from "./components/Filters";
import StudentTable from "./components/StudentTable";
import SubjectChart from "./components/SubjectChart";
import StudentModal from "./components/StudentModal";

//student details

const studentData = [
  { id: 1, name: "Aarav", subject: "Maths", score: 60, grade: "D" },
  { id: 2, name: "Diya", subject: "Science", score: 78, grade: "C" },
  { id: 3, name: "Karan", subject: "English", score: 65, grade: "D" },
  { id: 4, name: "Maya", subject: "Maths", score: 67, grade: "D" },
  { id: 5, name: "Ravi", subject: "Science", score: 88, grade: "B" },
  { id: 6, name: "Ishita", subject: "English", score: 81, grade: "B" },
  { id: 7, name: "Mohan", subject: "Science", score:72, grade: "C" },
  { id: 8, name: "Abi", subject: "Maths", score: 100, grade: "A" },   
  { id: 9, name: "Rai", subject: "Science", score: 94, grade: "A" },
  { id: 10, name: "Sharma", subject: "English", score: 75, grade: "C" },      
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [gradeFilter, setGradeFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [sortKey, setSortKey] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const filtered = useMemo(() => {
    return studentData
      .filter((s) =>
        subjectFilter === "All" ? true : s.subject === subjectFilter
      )
      .filter((s) => (gradeFilter === "All" ? true : s.grade === gradeFilter))
      .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        let res = a[sortKey] > b[sortKey] ? 1 : -1;
        return sortOrder === "asc" ? res : -res;
      });
  }, [search, subjectFilter, gradeFilter, sortKey, sortOrder]);

  const chartData = useMemo(() => {
    const grouping = {};
    filtered.forEach((s) => {
      grouping[s.subject] = grouping[s.subject] || { total: 0, count: 0 };
      grouping[s.subject].total += s.score;
      grouping[s.subject].count++;
    });
    return Object.entries(grouping).map(([subj, val]) => ({
      subject: subj,
      avgScore: +(val.total / val.count).toFixed(1),
    }));
  }, [filtered]);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Sidebar />
      <main className="main">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="content">
          <Filters
            search={search}
            onSearch={setSearch}
            subjectFilter={subjectFilter}
            onSubjectFilter={setSubjectFilter}
            gradeFilter={gradeFilter}
            onGradeFilter={setGradeFilter}
          />

          {/* Chart comes first */}
          <div className="chart-wrapper">
            <SubjectChart data={chartData} />
          </div>

          {/*  Then table */}
          <StudentTable
            data={filtered}
            onSort={(key) => {
              setSortKey(key);
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
            onRowClick={setSelectedStudent}
          />
        </div>
      </main>
      {selectedStudent && (
        <StudentModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
}
