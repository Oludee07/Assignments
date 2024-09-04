const students =[
  {
    name: 'Shola',
    age: 24,
    gender:'F',
    grade: 'A'
  },
  {
    name: 'Femi',
    age: 28,
    gender:'M',
    grade: 'C'
  },

  {
    name: 'Gemisola',
    age: 21,
    gender:'F',
    grade: 'F'
  },
  {
    name: 'Mimi',
    age: 30,
    gender:'F',
    grade: 'A'
  },
  {
    name: 'Francis',
    age: 24,
    gender:'M',
    grade: 'B'
  }
  
]

const filterByGrade =(student,grades )=>{
  let sorted =[];
  sorted = student.filter(gp => gp.grade === grades);

  return console.log(sorted);
}

const averageAge =(student) =>{
  let result = 0;
  let total = student.length;
  student.forEach((yr)=>{
      // console.log(total);
      result=result += yr.age;
  });
    result=Math.round(result/=total);
  return console.log(`Average age: ${result}`);
}

filterByGrade(students,'B');
averageAge(students);
