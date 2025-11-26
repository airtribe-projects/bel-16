const {add} = require('./example');

// Defines a test suite
describe("Testing addition of 2 numbers", () => {

    test("Should add 2 positive integers", () => {

        // Assertion
        expect(add(2,5)).toBe(7);
    });

    test("Should add 2 negative integers", () => {

        // Assertion
        expect(add(-2, -5)).toBe(-7);
    });

    test("Should have 2 parameters", () => {

        // Assertion
        expect(add(2)).toBe(null);
    });

    test("Should accepet numbers only", () => {
        // Assertion
        expect(add(2, "jay")).toBe(null);
    });

    test("Should accept numbers only", () => {
        // Assertion
        expect(add(2, 5)).not.toBe(8);
    });


    test("Should add numbers only", () => {
        // Assertion
        expect(add(1e8, 1e8)).toBe(2e8);
    });

    test("Should not return infinity", () => {
        expect(add(Infinity, 1)).toBe(Infinity);
    });

    test("subtract from infinity", () => {
        expect(add(Infinity, -1e5)).toBe(Infinity);
    });
})


