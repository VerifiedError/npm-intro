// v1.0: Created npm-intro package main file with basic utility functions

/**
 * A simple npm package demonstrating basic Node.js functionality
 * @module npm-intro
 */

/**
 * Greets a user with a personalized message
 * @param {string} name - The name of the person to greet
 * @returns {string} A greeting message
 */
function greet(name = 'World') {
  return `Hello, ${name}! Welcome to the npm-intro package.`;
}

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Gets the current timestamp
 * @returns {string} Current date and time as ISO string
 */
function getTimestamp() {
  return new Date().toISOString();
}

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} The string with first letter capitalized
 */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  greet,
  add,
  getTimestamp,
  capitalize
};