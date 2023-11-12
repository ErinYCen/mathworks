import { Request, Response } from "express";
import cors from "cors";
import { performCalculation } from "./utils/calculatorUtils";

const express = require("express");
const app = express();

app.use(cors());

//Middleware to parse incoming JSON requests
app.use(express.json());

//API setting
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "API is set" });
});

//sample input
app.get("/", (req: Request, res: Response) => {
  console.log("Hello World YEAH"); //log the sentence to the terminal
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
    const result = performCalculation(firstOperand, secondOperand, operation);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: "Invalid expression" });
  }
});
