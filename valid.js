export function isValid(board) {
  const size = { x: board.length, y: board[0].length };
  const total = 45;

  for (let row = 0, totalX = 0, totalY = 0; row < size.x; row++) {
    for (let col = 0; col < size.y; col++) {
      totalX += board[row][col];
      totalY += board[col][row];
    }
    if (totalX !== total || totalY !== total) return false;
  }

  return true;
}

export function findEmpty(board) {
  const size = { x: board.length, y: board[0].length };
  for (let row = 0; row < size.x; row++) {
    for (let col = 0; col < size.y; col++) {
      if (board[row][col] === 0) return [row, col];
    }
  }

  return null;
}
