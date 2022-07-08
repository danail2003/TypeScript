"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Junior = void 0;
const employee_1 = require("./employee");
class Junior extends employee_1.Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a simple task.');
    }
}
exports.Junior = Junior;
//# sourceMappingURL=junior.js.map