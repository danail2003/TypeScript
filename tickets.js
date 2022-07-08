class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    get Destination() {
        return this.destination;
    }
    get Price() {
        return this.price;
    }
    get Status() {
        return this.status;
    }
}
const displayTickets = (arrayOfTickets, criteria) => {
    let newArray = new Array();
    for (let i = 0; i < arrayOfTickets.length; i++) {
        const array = arrayOfTickets[i].split('|');
        let ticket = new Ticket(array[0], Number(array[1]), array[2]);
        newArray.push(ticket);
    }
    if (criteria === 'destination') {
        newArray.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if (criteria === 'price') {
        newArray.sort((a, b) => a.price - b.price);
    }
    else if (criteria === 'status') {
        newArray.sort((a, b) => a.status.localeCompare(b.status));
    }
    return newArray;
};
console.log(displayTickets(['Philadelphia|202.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'price'));
//# sourceMappingURL=tickets.js.map