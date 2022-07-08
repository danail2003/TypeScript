"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senior = void 0;
const employee_1 = require("./employee");
class Senior extends employee_1.Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
    }
}
exports.Senior = Senior;
;
//# sourceMappingURL=senior.js.map