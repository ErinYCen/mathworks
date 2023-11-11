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
      return secondOperand !== 0 ? firstOperand / secondOperand : "Error";
    default:
      return "Invalid Operation";
  }
}
