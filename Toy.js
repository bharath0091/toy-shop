let Product = require("../toy-shop/Product");

class  Toy extends Product {
    constructor(name, price, balls) {
        super(name, price);
        this.balls = balls
    }
    get profit() {
       return this.price - this.balls.map(item => item.price)
               .reduce((cum, item) => cum + item);
    }
}

module.exports = Toy;