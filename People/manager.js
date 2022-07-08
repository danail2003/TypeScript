"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const employee_1 = require("./employee");
class Manager extends employee_1.Employee {
    constructor(name, age) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }
    getSalary() {
        return this.divident + this.salary;
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map