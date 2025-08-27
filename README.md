# npm-intro

A simple npm package demonstrating basic Node.js functionality and npm workflow.

## Installation

```bash
npm install npm-intro
```

## Usage

```javascript
const { greet, add, getTimestamp, capitalize } = require('npm-intro');

// Greet someone
console.log(greet('Alice')); // "Hello, Alice! Welcome to the npm-intro package."
console.log(greet()); // "Hello, World! Welcome to the npm-intro package."

// Add numbers
console.log(add(5, 3)); // 8

// Get current timestamp
console.log(getTimestamp()); // "2025-08-27T..."

// Capitalize strings
console.log(capitalize('hello')); // "Hello"
```

## API

### `greet(name)`
- **name** (string, optional): The name to greet. Defaults to "World".
- **Returns**: A greeting message string.

### `add(a, b)`
- **a** (number): First number
- **b** (number): Second number
- **Returns**: The sum of a and b

### `getTimestamp()`
- **Returns**: Current date and time as ISO string

### `capitalize(str)`
- **str** (string): The string to capitalize
- **Returns**: The string with first letter capitalized

## License

ISC