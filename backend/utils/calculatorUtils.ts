export function performCalculation(
  firstOperand: number,
  secondOperand: number,
  operation: string
): number | string {
  switch (operation) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      if (secondOperand === 0) {
        throw new Error("Division by zero is not OK.");
      }
      return firstOperand / secondOperand;
    default:
      throw new Error("Invalid Operation");
  }
}
