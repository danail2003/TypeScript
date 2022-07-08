"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(method, uri, version, message) {
        this.response = undefined;
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    get Method() {
        return this.method;
    }
    get Uri() {
        return this.uri;
    }
    get Version() {
        return this.version;
    }
    get Message() {
        return this.message;
    }
    get Response() {
        return this.response;
    }
    get Fulfilled() {
        return this.fulfilled;
    }
}
exports.Data = Data;
let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
//# sourceMappingURL=dataClass.js.map