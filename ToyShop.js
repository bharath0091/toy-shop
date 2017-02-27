let Product = require("./Product");
let Toy = require("./Toy");
let Ball = require("./Ball");

class ToyShop{
    constructor(noOfX, noOfY, noOfZ, p, q, r, s) {
        this.noOfX = noOfX;
        this.noOfY = noOfY;
        this.noOfZ = noOfZ;
        this.p = p;
        this.q = q;
        this.r = r;
        this.s = s;
    }

    createProducts() {
        let products = [];
        let xBall = new Ball("x", this.s);
        let yBall = new Ball("y", this.s);
        let zBall = new Ball("z", this.s);
        products.push(new Toy("xy", this.p, [xBall, yBall]));
        products.push(new Toy("yz", this.q, [yBall, zBall]));
        products.push(new Toy("xyz", this.r, [xBall, yBall, zBall]));
        products.push(xBall);
        products.push(yBall);
        products.push(zBall);
        return products;
    }

    checkIfStockAvailable(name) {
        console.log("checkIfStockAvailable " + name)
        let available = false;
        switch (name) {
            case "x" : if (this.noOfX > 0) {available = true;} break;
            case "y" : if (this.noOfY > 0) {available = true;} break;
            case "z" : if (this.noOfZ > 0) {available = true;} break;
        }
        console.log("available " + available);
        return available;
    }

    makeProduct(product) {
        console.log("make product " + product.name);
        if(product instanceof Toy) {
            for (let i = 0; i < product.balls.length; i++) {
                let ball = product.balls[i];
                if(!this.checkIfStockAvailable(ball.name)) return false;
            }
        } else {
            if(!this.checkIfStockAvailable(product.name)) return false;
        }
        this.reduceInventoryForThisProduct(product);
        return true;
    }

    reduceInventoryForThisProduct(product) {
        console.log("reduce inventory for " + product.name);
        if(product instanceof Toy) {
            product.balls.forEach(ball => this.reduceInventory(ball.name));
        } else {
            this.reduceInventory(product.name);
        }
    }

    reduceInventory(name) {
        switch (name) {
            case "x" : --this.noOfX; break;
            case "y" : --this.noOfY; break;
            case "z" : --this.noOfZ; break;
        }
    }

    getBestProfit() {
        let madeProducts = [];
        this.createProducts().sort((item1, item2) => item2.profit - item1.profit)
            .forEach(product => {
                while(this.makeProduct(product)) {
                    madeProducts.push(product);
                }
            });

            return madeProducts.map(product => product.price)
                .reduce((cum, item) => cum + item);
    }
}

module.exports = ToyShop;






