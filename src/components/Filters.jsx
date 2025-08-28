import React from 'react';

export default function Filters({
  search, onSearch,
  subjectFilter, onSubjectFilter,
  gradeFilter, onGradeFilter
}) {
  const subjects = ['All', 'Math', 'Science', 'English'];
  const grades = ['All', 'A', 'B', 'C'];

  return (
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => onSearch(e.target.value)}
      />
      <select value={subjectFilter} onChange={e => onSubjectFilter(e.target.value)}>
        {subjects.map(s => <option key={s}>{s}</option>)}
      </select>
      <select value={gradeFilter} onChange={e => onGradeFilter(e.target.value)}>
        {grades.map(g => <option key={g}>{g}</option>)}
      </select>
    </div>
  );
}
