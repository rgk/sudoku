import { isValid } from './valid.js';
import { generate } from './generate.js';

let state = generate();

export function update(value, row, column) {
  if (typeof value !== "number" || value < 1 || value > 9) return null;
  const temp = state[row][column];
  state[row][column] = value;

  if (isValid(state)) return true;

  state[row][column] = temp;
  return false;
}

export function restart(board = generate()) {
  return state = board;
}
