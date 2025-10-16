import "@testing-library/jest-dom";

// Sample utility function test
const addNumbers = (a: number, b: number): number => a + b;

describe("addNumbers utility", () => {
  it("correctly adds two positive numbers", () => {
    // Arrange
    const num1 = 5;
    const num2 = 3;
    const expected = 8;

    // Act
    const result = addNumbers(num1, num2);

    // Assert
    expect(result).toBe(expected);
  });

  it("handles negative numbers correctly", () => {
    // Arrange
    const num1 = -2;
    const num2 = 3;
    const expected = 1;

    // Act
    const result = addNumbers(num1, num2);

    // Assert
    expect(result).toBe(expected);
  });
});

// String utility function test
const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

describe("capitalize utility", () => {
  it("capitalizes the first letter of a word", () => {
    // Arrange
    const input = "hello";
    const expected = "Hello";

    // Act
    const result = capitalize(input);

    // Assert
    expect(result).toBe(expected);
  });

  it("handles empty strings", () => {
    // Arrange
    const input = "";
    const expected = "";

    // Act
    const result = capitalize(input);

    // Assert
    expect(result).toBe(expected);
  });

  it("converts the rest of the string to lowercase", () => {
    // Arrange
    const input = "hELLO";
    const expected = "Hello";

    // Act
    const result = capitalize(input);

    // Assert
    expect(result).toBe(expected);
  });
});
