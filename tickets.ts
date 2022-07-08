class Ticket {
    private destination: string;
    private price: number;
    private status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    get Destination(): string {
        return this.destination;
    }

    get Price(): number {
        return this.price;
    }

    get Status(): string {
        return this.status;
    }
}

const displayTickets = (arrayOfTickets: [string, string, string, string], criteria: string) => {
    let newArray = new Array();

    for (let i = 0; i < arrayOfTickets.length; i++) {
        const array = (arrayOfTickets[i] as any).split('|');
        let ticket = new Ticket(array[0], Number(array[1]), array[2]);
        newArray.push(ticket);
    }

    if (criteria === 'destination') {
        newArray.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if (criteria === 'price') {
        newArray.sort((a, b) => a.price - b.price);
    }
    else if(criteria === 'status') {
        newArray.sort((a, b) => a.status.localeCompare(b.status));
    }

    return newArray;
};

console.log(displayTickets(['Philadelphia|202.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'price'));