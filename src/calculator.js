#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator App
 *
 * Supported operations:
 *   add        - Addition (+): adds two numbers together
 *   subtract   - Subtraction (-): subtracts the second number from the first
 *   multiply   - Multiplication (x): multiplies two numbers together
 *   divide     - Division (÷): divides the first number by the second
 *   modulo     - Modulo (%): returns the remainder of dividing the first number by the second
 *   power      - Exponentiation (^): raises the base to the given exponent
 *   squareRoot - Square Root (√): returns the square root of a number
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3           => 8
 *   node calculator.js subtract 9 4      => 5
 *   node calculator.js multiply 3 7      => 21
 *   node calculator.js divide 10 2       => 5
 *   node calculator.js modulo 10 3       => 1
 *   node calculator.js power 2 8         => 256
 *   node calculator.js squareRoot 16     => 4
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

// Modulo: returns the remainder of dividend divided by divisor
// Throws an error if divisor is zero to prevent modulo by zero
function modulo(dividend, divisor) {
  if (divisor === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return dividend % divisor;
}

// Exponentiation (power): returns base raised to the given exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root: returns the square root of n
// Throws an error if n is negative, as square root of a negative number is not real
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// Map of operation names to their corresponding functions
const operations = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
function main() {
  const [, , op, rawA, rawB] = process.argv;

  if (!op || rawA === undefined) {
    console.error(
      "Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]"
    );
    process.exit(1);
  }

  if (!operations[op]) {
    console.error(
      `Unknown operation: "${op}". Valid operations: add, subtract, multiply, divide, modulo, power, squareRoot`
    );
    process.exit(1);
  }

  const a = parseFloat(rawA);

  if (isNaN(a)) {
    console.error("First argument must be a valid number.");
    process.exit(1);
  }

  // squareRoot only needs one argument
  if (op === "squareRoot") {
    try {
      const result = squareRoot(a);
      console.log(`squareRoot(${a}) = ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    return;
  }

  if (rawB === undefined) {
    console.error("Usage: node calculator.js <operation> <num1> <num2>");
    process.exit(1);
  }

  const b = parseFloat(rawB);

  if (isNaN(b)) {
    console.error("Second argument must be a valid number.");
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
