// Exercise 11: Active students by campus
//
// Use only active students.
// Group students by campus.
// For each campus, return:
// - campus
// - activeStudentCount
// - studentNames sorted alphabetically
//
// Sort by activeStudentCount descending, then campus alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const students = require('../data/students.json');

const lodashSolution = _.chain(students)
.filter(student =>  student.status === 'active')
.groupBy('campus')
.map((campusStudents, campus) => ({
  campus,
  activeStudentCount: campusStudents.length,
  studentNames: _.sortBy(
   _.map(campusStudents, 'name')
)

    }))
    .orderBy (
      ['activeStudentCount', 'campus'],
      ['desc', 'asc']
    )
  .value();

console.log(lodashSolution);

/*
Expected output:
[
  {
    campus: 'Vancouver',
    activeStudentCount: 12,
    studentNames: [
      'Abigail Lewis',
      'Amelia Anderson',
      'Ava Chen',
      'Benjamin White',
      'Daniel Wright',
      'Ella Roberts',
      'Liam Park',
      'Lily Baker',
      'Mason Davis',
      'Noah Wilson',
      'Sebastian Campbell',
      'Sophia Brown'
    ]
  },
  {
    campus: 'Toronto',
    activeStudentCount: 10,
    studentNames: [
      'Aria Phillips',
      'Charlotte Moore',
      'Ethan Lee',
      'Henry Clark',
      'Isabella Martin',
      'Leo Evans',
      'Mia Santos',
      'Owen Perez',
      'Sofia King',
      'Zoey Nelson'
    ]
  },
  {
    campus: 'Montreal',
    activeStudentCount: 9,
    studentNames: [
      'Alexander Young',
      'Emma Johnson',
      'Evelyn Harris',
      'Grace Scott',
      'Harper Rodriguez',
      'Lucas Garcia',
      'Nora Mitchell',
      'Samuel Adams',
      'Wyatt Turner'
    ]
  }
]
*/
