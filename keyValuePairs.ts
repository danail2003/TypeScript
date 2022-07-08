class KeyValuePair<T, U> {
    private key: T;
    private val: U;

    setKeyValue(firstElment: T, secondElement: U){
        this.key=firstElment;
        this.val=secondElement;
    }

    display(){
        return `key = ${this.key}, value = ${this.val}`;
    }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();
