class Box<T> {
    private elements: Array<any>;

    constructor() {
        this.elements=new Array<any>();
    }

    add(element: any) {
        this.elements.push(element);
    }

    remove() {
        this.elements.pop();
    }

    get count(): number {
        return this.elements.length;
    }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
