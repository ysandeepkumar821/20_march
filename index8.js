// Adding a method to a prototype.


function Student(name) {
    this.name = name;
  }
  
  Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Expected Output
  
  const student = new Student("Mithun");
  student.printDetails(); // "Hello, the student is Mithun"
  
