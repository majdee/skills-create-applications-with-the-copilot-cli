#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator App
 *
 * Supported operations:
 *   add      - Addition (+): adds two numbers together
 *   subtract - Subtraction (-): subtracts the second number from the first
 *   multiply - Multiplication (x): multiplies two numbers together
 *   divide   - Division (÷): divides the first number by the second
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 5 3        => 8
 *   node calculator.js subtract 9 4   => 5
 *   node calculator.js multiply 3 7   => 21
 *   node calculator.js divide 10 2    => 5
 */

// Addition: returns the sum of augend and addend
function add(augend, addend) {
  return augend + addend;
}

// Subtraction: returns the difference of minuend minus subtrahend
function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}

// Multiplication: returns the product of multiplicand and multiplier
function multiply(multiplicand, multiplier) {
  return multiplicand * multiplier;
}

// Division: returns the quotient of dividend divided by divisor
// Throws an error if divisor is zero to prevent division by zero
function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return dividend / divisor;
}

// Map of operation names to their corresponding functions
const operations = { add, subtract, multiply, divide };

// CLI entry point
function main() {
  const [, , op, rawA, rawB] = process.argv;

  if (!op || rawA === undefined || rawB === undefined) {
    console.error("Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>");
    process.exit(1);
  }

  if (!operations[op]) {
    console.error(`Unknown operation: "${op}". Valid operations: add, subtract, multiply, divide`);
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (isNaN(a) || isNaN(b)) {
    console.error("Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = operations[op](a, b);
    console.log(`${a} ${op} ${b} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

// Only run CLI entry point when executed directly, not when required as a module
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };
