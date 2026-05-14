// Employee data
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

/*
1. Insert new employee at 2nd position
2. Remove employee with name "Kiran"
3. Change Sneha's last mark from 95 to 75
*/


// Insert a new employee at index 2 (3rd position)
employees.splice(2, 0, {
  eno: 106,
  name: "sreeman",
  marks: [55, 66, 77]
});

// Display updated employee list after insertion
console.log(employees);


// Remove employee whose name is "Kiran"
const updatedEmployees = employees.filter(
  emp => emp.name !== "Kiran"
);

// Display employee list after removal
console.log(updatedEmployees);


// Find employee named "Sneha"
const sneha = employees.find(
  emp => emp.name === "Sneha"
);

// Update Sneha's last mark to 75
if (sneha) {
  sneha.marks[sneha.marks.length - 1] = 75;
}

// Display Sneha's updated details
console.log(sneha);

// Display final employee array
console.log(employees);
