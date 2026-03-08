/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover all arithmetic operations:
 *   - add        (addition +)
 *   - subtract   (subtraction -)
 *   - multiply   (multiplication x)
 *   - divide     (division ÷)
 *   - modulo     (remainder %)
 *   - power      (exponentiation ^)
 *   - squareRoot (square root √)
 *
 * Edge cases tested:
 *   - Division by zero
 *   - Modulo by zero
 *   - Square root of negative numbers
 *   - Negative numbers
 *   - Decimal (floating-point) numbers
 *   - Identity values (adding 0, multiplying by 1, etc.)
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition ---
describe('add', () => {
  // From image: 2 + 3 = 5
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds decimals', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });

  test('adding zero returns the same number (identity)', () => {
    expect(add(7, 0)).toBe(7);
  });
});

// --- Subtraction ---
describe('subtract', () => {
  // From image: 10 - 4 = 6
  test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('subtracts resulting in a negative number', () => {
    expect(subtract(3, 9)).toBe(-6);
  });

  test('subtracts two negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts decimals', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test('subtracting zero returns the same number (identity)', () => {
    expect(subtract(7, 0)).toBe(7);
  });
});

// --- Multiplication ---
describe('multiply', () => {
  // From image: 45 * 2 = 90
  test('multiplies 45 * 2 to equal 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test('multiplies two negative numbers to give a positive result', () => {
    expect(multiply(-3, -3)).toBe(9);
  });

  test('multiplies decimals', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplying by one returns the same number (identity)', () => {
    expect(multiply(8, 1)).toBe(8);
  });
});

// --- Division ---
describe('divide', () => {
  // From image: 20 / 5 = 4
  test('divides 20 / 5 to equal 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(15, 3)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number by a positive number', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers to give a positive result', () => {
    expect(divide(-9, -3)).toBe(3);
  });

  test('dividing by one returns the same number (identity)', () => {
    expect(divide(5, 1)).toBe(5);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});

// --- Modulo ---
describe('modulo', () => {
  // From image: 10 % 3 = 1
  test('returns modulo remainder of 10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when dividend is exactly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('returns modulo of a negative dividend', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('returns modulo with decimal numbers', () => {
    expect(modulo(10.5, 3)).toBeCloseTo(1.5);
  });

  test('returns dividend when divisor is larger', () => {
    expect(modulo(3, 10)).toBe(3);
  });

  // Edge case: modulo by zero
  test('throws an error when modulo divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// --- Power (Exponentiation) ---
describe('power', () => {
  // From image: 2 ^ 8 = 256
  test('raises 2 to the power of 8 to equal 256', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('raises a number to the power of 2 (square)', () => {
    expect(power(5, 2)).toBe(25);
  });

  test('raises a number to the power of 0 returns 1', () => {
    expect(power(7, 0)).toBe(1);
  });

  test('raises a number to the power of 1 returns itself (identity)', () => {
    expect(power(9, 1)).toBe(9);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('raises a negative base to an even exponent returns positive', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent returns negative', () => {
    expect(power(-2, 3)).toBe(-8);
  });
});

// --- Square Root ---
describe('squareRoot', () => {
  // From image: √16 = 4
  test('returns square root of 16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('returns square root of 9 = 3', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('returns square root of 25 = 5', () => {
    expect(squareRoot(25)).toBe(5);
  });

  test('returns square root of 2 (irrational)', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test('returns 0 for square root of 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('returns 1 for square root of 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  // Edge case: square root of a negative number
  test('throws an error for square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });

  test('throws an error for square root of -9', () => {
    expect(() => squareRoot(-9)).toThrow("Square root of a negative number is not allowed.");
  });
});
