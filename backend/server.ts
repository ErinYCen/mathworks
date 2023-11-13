import { Request, Response } from "express";
import { performCalculation } from "./utils/calculatorUtils";

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log("Hello World YEAH");
  res.send("Hell YEAH from the backend");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

//POST route for calculations
app.post("/calculate", (req: Request, res: Response) => {
  const { firstOperand, secondOperand, operation } = req.body;
  try {
    if (!firstOperand || !secondOperand || !operation) {
      throw new Error("Operands and operation must be provided.");
    }

    if (isNaN(Number(firstOperand)) || isNaN(Number(secondOperand))) {
      throw new Error("Operands must be valid numbers.");
    }
    const result = performCalculation(Number(firstOperand), Number(secondOperand), operation);
    res.json({ result });
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
});
