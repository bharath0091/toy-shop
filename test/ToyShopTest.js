let ToyShop = require("../ToyShop")
let assert = require('assert');

describe("Test ToyShop", () => {
    it("make toys and balls", () => {
    let toyShop = new ToyShop(2, 3, 4, 10, 20, 10, 4);
        assert.equal(toyShop.getBestProfit(),72);
        // made of 3 yz, 2x, 1z
        // 3*20 + 2*4 + 1*4
    });
    it("make only balls", () => {
        let toyShop = new ToyShop(2, 3, 4, 4, 4, 4, 4);
        assert.equal(toyShop.getBestProfit(),36);
        // made of 3 yz, 2x, 1z
        // 3*20 + 2*4 + 1*4
    });
});