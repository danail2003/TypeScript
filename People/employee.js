"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    work() {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }
    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this monnth.`);
    }
    getSalary() {
        return this.salary;
    }
}
exports.Employee = Employee;
;
//# sourceMappingURL=employee.js.map