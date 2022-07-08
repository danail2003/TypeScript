var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (firstElment, secondElement) {
        this.key = firstElment;
        this.val = secondElement;
    };
    KeyValuePair.prototype.display = function () {
        return "key = ".concat(this.key, ", value = ").concat(this.val);
    };
    return KeyValuePair;
}());
var kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
