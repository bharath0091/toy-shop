let Toy = require("../Toy");
let Ball = require("../Ball");
let assert = require('assert');

describe("Test Toy", () => {
    it("test profit", () => {
        let xBall = new Ball("x", 4);
        let yBall = new Ball("y", 4);
        let toy = new Toy("xy", 10, [xBall, yBall]);

        assert(toy.profit, 2);
    });
});