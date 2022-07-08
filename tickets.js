var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    Object.defineProperty(Ticket.prototype, "Destination", {
        get: function () {
            return this.destination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "Price", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "Status", {
        get: function () {
            return this.status;
        },
        enumerable: false,
        configurable: true
    });
    return Ticket;
}());
var displayTickets = function (arrayOfTickets, criteria) {
    var newArray = new Array();
    for (var i = 0; i < arrayOfTickets.length; i++) {
        var array = arrayOfTickets[i].split('|');
        var ticket = new Ticket(array[0], Number(array[1]), array[2]);
        newArray.push(ticket);
    }
    if (criteria === 'destination') {
        newArray.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
    }
    else if (criteria === 'price') {
        newArray.sort(function (a, b) { return a.price - b.price; });
    }
    else if (criteria === 'status') {
        newArray.sort(function (a, b) { return a.status.localeCompare(b.status); });
    }
    return newArray;
};
console.log(displayTickets(['Philadelphia|202.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'price'));
