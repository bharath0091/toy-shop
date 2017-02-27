class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get profit() {
        return this.price;
    }
}

module.exports = Product;