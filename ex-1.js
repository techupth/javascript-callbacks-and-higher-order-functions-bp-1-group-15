// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  let updatedArray = [];
  for (let i of array) {
    updatedArray.push(operation(i));
  }; return updatedArray;
};

function add5000(value) {
  return value + 5000;
};

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
newEmployeeSalaries.push(forEach(employeeSalaries, add5000));
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]