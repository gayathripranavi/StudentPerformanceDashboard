import React, { useState, useMemo, useEffect } from "react";
import "./index.css";

//these are custom components:

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Filters from "./components/Filters";
import StudentTable from "./components/StudentTable";
import SubjectChart from "./components/SubjectChart";
import StudentModal from "./components/StudentModal";

//student details:

const studentData = [
  { id: 1, name: "Abi", subject: "Math", score: 78, grade: "C" },
  { id: 2, name: "Sharma", subject: "Science", score: 88, grade: "B" },
  { id: 3, name: "Josh", subject: "English", score: 92, grade: "A" },
  { id: 4, name: "Meera", subject: "Math", score: 100, grade: "A" },
  { id: 5, name: "Nithya", subject: "Science", score: 74, grade: "C" },
  { id: 6, name: "John", subject: "Math", score: 50, grade: "D" },
  { id: 7, name: "Dev", subject: "Computer", score: 76, grade: "C" },
  { id: 8, name: "Rohit", subject: "Tamil", score: 100, grade: "A" },
  { id: 9, name: "Surya", subject: "Computer", score: 60, grade: "D" },
  { id: 10, name: "Sri", subject: "Tamil", score: 100, grade: "A" },
];

function App() {
  
  //states declaration:

  const [search, setSearch] = useState("");        
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [gradeFilter, setGradeFilter] = useState("All");
  const [sortKey, setSortKey] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  //  modal state
  const [selectedStudent, setSelectedStudent] = useState(null);

  //  dark mode state (load from localStorage if exists)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");    
   // console.log(saved);
    return saved ? JSON.parse(saved) : false;            
  });

  //  save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const filtered = useMemo(() => {
    return studentData
      .filter((s) => (subjectFilter === "All" ? true : s.subject === subjectFilter))
      .filter((s) => (gradeFilter === "All" ? true : s.grade === gradeFilter))
      .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        let res = a[sortKey] > b[sortKey] ? 1 : -1;
        return sortDirection === "asc" ? res : -res;
      });
  }, [search, subjectFilter, gradeFilter, sortKey, sortDirection]);
console.log(filtered)
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
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Sidebar />
      <div className="main">
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
          <SubjectChart data={chartData} />

          <StudentTable
            data={filtered}
            sortKey={sortKey}
            sortDirection={sortDirection}
            onSort={(key) => {
              if (key === sortKey) setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
              else {
                setSortKey(key);
                setSortDirection("asc");
              }
            }}
            onRowClick={(student) => setSelectedStudent(student)}
          />

          <StudentModal
            student={selectedStudent}
            onClose={() => setSelectedStudent(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
