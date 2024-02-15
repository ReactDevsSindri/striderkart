const students = [
  { name: "Rishu", marks: 95 },
  { name: "Mahatha", marks: 98 },
  { name: "Pratik", marks: 99 },
];

// map takes an array and return a new array
// original array length = transformed array length

const namesArray = students.map((student) => student.name);
const marksArray = students.map((student) => student.marks);

const obj1 = { name: "Rishu", marks: 95 };
const obj2 = { ...obj1 }.name;
// obj2.hobbby = "standup";

console.log(obj1);
console.log(obj2);
