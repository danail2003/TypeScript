export abstract class Employee {
    private name: string;
    private age: number;
    protected salary: number;
    protected tasks: Array<string>;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this monnth.`);
    }

    public getSalary(): number {
        return this.salary;
    }
};