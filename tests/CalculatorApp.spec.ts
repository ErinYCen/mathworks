import { performCalculation } from "../src/utils/calculatorUtils";

describe("CalculatorApp.vue", () => {
  //Test for "+" operation
  it("#s + #s", () => {
    const result = performCalculation(2, 4, "+");
    expect(result).toBe(6);
  });

  it("0 + #s", () => {
    const result = performCalculation(0, 4, "+");
    expect(result).toBe(4);
  });

  it("#s + 0", () => {
    const result = performCalculation(2, 0, "+");
    expect(result).toBe(2);
  });

  it("0 + 0", () => {
    const result = performCalculation(0, 0, "+");
    expect(result).toBe(0);
  });

  //Test for "-" operation
  it("#s - #s", () => {
    const result = performCalculation(4, 2, "-");
    expect(result).toBe(2);
  });

  it("0 - #s", () => {
    const result = performCalculation(0, 4, "-");
    expect(result).toBe(-4);
  });

  it("#s - 0", () => {
    const result = performCalculation(5, 0, "-");
    expect(result).toBe(5);
  });

  it("0 - 0", () => {
    const result = performCalculation(0, 0, "-");
    expect(result).toBe(0);
  });

  //Test for "*" operation
  it("#s * #s", () => {
    const result = performCalculation(2, 2, "*");
    expect(result).toBe(4);
  });

  it("0 * #s", () => {
    const result = performCalculation(0, 4, "*");
    expect(result).toBe(0);
  });

  it("#s * 0", () => {
    const result = performCalculation(2, 0, "*");
    expect(result).toBe(0);
  });

  it("0 * 0", () => {
    const result = performCalculation(0, 0, "*");
    expect(result).toBe(0);
  });

  //Test for "/" operation !divide by zero!
  it("#s / #s", () => {
    const result = performCalculation(6, 2, "/");
    expect(result).toBe(3);
  });

  it("0 / #s", () => {
    const result = performCalculation(0, 4, "/");
    expect(result).toBe(0);
  });

  it("#s / 0", () => {
    const result = performCalculation(2, 0, "/");
    expect(result).toBe("Error");
  });

  it("0 / 0", () => {
    const result = performCalculation(0, 0, "/");
    expect(result).toBe("Error");
  });
});
