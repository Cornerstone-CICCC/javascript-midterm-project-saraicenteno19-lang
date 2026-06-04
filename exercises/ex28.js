// Exercise 28: Vancouver attendance leaders
//
// Return the 5 active Vancouver students with the highest attendance.
// Each item should include: name, cohort, attendance.
// Sort by attendance descending, then by name ascending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const students = require('../data/students.json');

const lodashSolution = _. chain(students)
.filter(student =>
  student.status === 'active' &&
  student.campus === 'Vancouver'
)
.orderBy(['attendance', 'name'], ['desc', 'asc'])
.take(5)
.map(student => ({
  name: student.name,
  cohort: student.cohort,
  attendance: student.attendance
}))
.value();

console.log(lodashSolution);

/*
Expected output:
[
  { name: 'Sebastian Campbell', cohort: 'Web-0526', attendance: 98 },
  { name: 'Ava Chen', cohort: 'Web-0526', attendance: 96 },
  { name: 'Daniel Wright', cohort: 'Web-0526', attendance: 94 },
  { name: 'Benjamin White', cohort: 'Data-0526', attendance: 92 },
  { name: 'Lily Baker', cohort: 'UX-0526', attendance: 92 }
]
*/
