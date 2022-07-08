import { Employee } from "./employee";

export class Manager extends Employee {
    private divident: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }

    public getSalary(): number {
        return this.divident + this.salary;
    }
}