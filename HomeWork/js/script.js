'use strict';

// First task

// написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять

// Student Object
function Student(name, specialization, averageGrade, missedClasses) {
  this.name = name;
  this.specialization = specialization;
  this.averageGrade = averageGrade;
  this.missedClasses = missedClasses;
}

// Method to display student information
Student.prototype.displayInfo = function () {
  console.log(`Name: ${this.name}, Specialization: ${this.specialization}, Average Grade: ${this.averageGrade}, Missed Classes: ${this.missedClasses}`);
};

// Three instances of students
const student1 = new Student("John Doe", "Computer Science", 85, 2);
const student2 = new Student("Jane Smith", "Mathematics", 92, 1);
const student3 = new Student("Bob Johnson", "Physics", 78, 3);

// Displaying information using the method
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();



// Second task

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// Shop function
function shop(product, pricePerKg, quantity) {
  const totalCost = pricePerKg * quantity;
  return `Product: ${product}, Total Cost: ${totalCost}`;
}

// Testing with different products
console.log(shop("banana", 30, 4.5));
console.log(shop("cherry", 58, 1.3));
console.log(shop("jrange", 89, 3.4));


