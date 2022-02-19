
const updateStudents = students.map(function(student){
  // console.log(stu dent);
  student.role = 'student';
  return student;
})


const highScore = updateStudents.filter(function(student){
  return student.score >= 80;
})

const findStudent = students.find(function(student){
  return student.id === 1 ;
})


const averageScore = students.reduce(function(total, currStudent){
  total += currStudent.score;
  return total;
},0) / students.length;

const survey = students.reduce(function(survey, student){
  const favSubject = student.favoriteSubject;
  survey[favSubject] ? survey[favSubject] += 1 : survey[favSubject] = 1;
  return survey
}, {})

console.log(updateStudents);
console.log(highScore);
console.log(findStudent);
console.log(`The average of score is: ${averageScore}`);
console.log(survey);
