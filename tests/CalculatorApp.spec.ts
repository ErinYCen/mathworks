import { performCalculation } from "../src/utils/calculatorUtils";

describe("CalculatorApp.vue", () => {
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
});
