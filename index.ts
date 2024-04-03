/*
 * This program calculates the max character run in a string
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-04-03
 */

import { createPrompt } from "bun-promptx";

function maxRunFunction(inputStr) {
  /*
   * This function calculates the max run in a string
   */
  let maxRun = 0;
  let currentRun = 0;

  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === inputStr[i + 1]) {
      currentRun++;
      if (currentRun > maxRun) {
        maxRun = currentRun;
      }
    } else {
      currentRun = 1;
    }
  }

  return maxRun;
}

// input
const input = createPrompt("Enter a string: ");
const inputStr = input.value;

// process & output
if (inputStr.length) {
  let maxRun = maxRunFunction(inputStr);
  console.log(`The string "${inputStr}" has a max run of ${maxRun}!`);
} else {
  console.log("Invalid input.");
}

console.log("\nDone.");
